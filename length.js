import express from "express";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const filePath = path.join(__dirname, "index.html");

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/convert-length", (req, res) => {
  res.sendFile(filePath);
});

app.post("/convert-length", (req, res) => {
  const { length, convertFrom, convertTo } = req.body;
  const numericLength = parseFloat(length);

  const mm = {
    cm: 0.1,
    m: 0.001,
    km: 0.000001,
    ft: 0.00328084,
    inch: 0.03937008,
    mile: 0.0000006213712,
    yard: 0.001093613,
  };
  const cm = {
    mm: 10,
    m: 0.01,
    km: 0.00001,
    ft: 0.0328084,
    inch: 0.3937008,
    mile: 0.000006213712,
    yard: 0.01093613,
  };
  const m = {
    mm: 1000,
    cm: 100,
    km: 0.001,
    ft: 3.28084,
    inch: 39.37008,
    mile: 0.0006213712,
    yard: 1.093613,
  };
  const km = {
    mm: 1000000,
    cm: 100000,
    m: 1000,
    ft: 3280.84,
    inch: 39370.08,
    mile: 0.6213712,
    yard: 1093.613,
  };
  const ft = {
    mm: 304.8,
    cm: 30.48,
    m: 0.3048,
    km: 0.0003048,
    inch: 12,
    mile: 0.0001893939,
    yard: 0.3333333,
  };
  const inch = {
    mm: 25.4,
    cm: 2.54,
    m: 0.0254,
    ft: 0.08333333,
    km: 0.0000254,
    mile: 0.00001578283,
    yard: 0.02777778,
  };
  const mile = {
    mm: 1609344,
    m: 1609.344,
    km: 1.609344,
    ft: 5280,
    inch: 63360,
    cm: 160934.4,
    yard: 1760,
  };
  const yard = {
    mm: 914.4,
    m: 0.9144,
    km: 0.0009144,
    ft: 3,
    inch: 36,
    mile: 0.0005681818,
    cm: 91.439997074,
  };

  switch (convertFrom) {
    case "mm":
      switch (convertTo) {
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mm.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "cm":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * cm.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "m":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * m.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "km":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * km.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "ft":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * ft.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "inch":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * inch.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "mile":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "yard":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * mile.yard
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "yard":
      switch (convertTo) {
        case "mm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.mm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "cm":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.cm
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "m":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.m
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "km":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.km
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "ft":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.ft
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "inch":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.inch
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        case "mile":
          res.send(
            `<h3>Result of your calculation</h3>
            <h3>${numericLength} ${convertFrom} = ${
              numericLength * yard.mile
            } ${convertTo}</h3>
            <button><a href="./convert-length">Reset</a></button>`
          );
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
  }
  // console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
