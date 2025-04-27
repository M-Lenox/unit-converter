import express from "express";
import path from "path";
import { mg, g, kg, ounce, pound } from "./conversion.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const filePath = path.join(__dirname, "weight.html");

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/convert-weight", (req, res) => {
  res.sendFile(filePath);
});

app.post("/convert-weight", (req, res) => {
  const { weight, convertFrom, convertTo } = req.body;
  const numericWeight = parseFloat(weight);
  let convertedValue;

  switch (convertFrom) {
    case "mg":
      switch (convertTo) {
        case "g":
          convertedValue = numericWeight * mm.g;
          break;
        case "kg":
          convertedValue = numericWeight * mg.kg;
          break;
        case "ounce":
          convertedValue = numericWeight * mg.ounce;
          break;
        case "pound":
          convertedValue = numericWeight * mg.pound;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "g":
      switch (convertTo) {
        case "mg":
          convertedValue = numericWeight * g.mg;
          break;
        case "kg":
          convertedValue = numericWeight * g.kg;
          break;
        case "ounce":
          convertedValue = numericWeight * g.ounce;
          break;
        case "pound":
          convertedValue = numericWeight * g.pound;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "kg":
      switch (convertTo) {
        case "mg":
          convertedValue = numericWeight * kg.mg;
          break;
        case "g":
          convertedValue = numericWeight * kg.g;
          break;
        case "ounce":
          convertedValue = numericWeight * kg.ounce;
          break;
        case "pound":
          convertedValue = numericWeight * kg.pound;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "ounce":
      switch (convertTo) {
        case "mg":
          convertedValue = numericWeight * ounce.mg;
          break;
        case "g":
          convertedValue = numericWeight * ounce.g;
          break;
        case "kg":
          convertedValue = numericWeight * ounce.kg;
          break;
        case "pound":
          convertedValue = numericWeight * ounce.pound;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "pound":
      switch (convertTo) {
        case "mg":
          convertedValue = numericWeight * pound.mg;
          break;
        case "g":
          convertedValue = numericWeight * pound.g;
          break;
        case "kg":
          convertedValue = numericWeight * pound.kg;
          break;
        case "ounce":
          convertedValue = numericWeight * pound.ounce;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
  }

  res.send(
    `<h3>Results of your calculation</h3>
    <h3>${numericWeight} ${convertFrom} = ${convertedValue} ${convertTo}</h3>
    <button><a href="./convert-weight">Reset</a></button>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
