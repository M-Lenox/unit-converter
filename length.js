import express from "express";
import path from "path";
import {
  mm,
  cm,
  m,
  km,
  ft,
  inch,
  mile,
  yard,
  mg,
  g,
  kg,
  ounce,
  pound,
} from "./conversion.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const filePathLength = path.join(__dirname, "length.html");
const filePathWeight = path.join(__dirname, "weight.html");
const filePathTemperature = path.join(__dirname, "temperature.html");

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/convert-length", (req, res) => {
  res.sendFile(filePathLength);
});

app.get("/convert-weight", (req, res) => {
  res.sendFile(filePathWeight);
});

app.get("/convert-temperature", (req, res) => {
  res.sendFile(filePathTemperature);
});

//post route for length
app.post("/convert-length", (req, res) => {
  const { length, convertFrom, convertTo } = req.body;
  const numericLength = parseFloat(length);
  let convertedValue;

  switch (convertFrom) {
    case "mm":
      switch (convertTo) {
        case "cm":
          convertedValue = numericLength * mm.cm;
          break;
        case "m":
          convertedValue = numericLength * mm.m;
          break;
        case "km":
          convertedValue = numericLength * mm.km;
          break;
        case "ft":
          convertedValue = numericLength * mm.ft;
          break;
        case "inch":
          convertedValue = numericLength * mm.inch;
          break;
        case "mile":
          convertedValue = numericLength * mm.mile;
          break;
        case "yard":
          convertedValue = numericLength * mm.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "cm":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * cm.mm;
          break;
        case "m":
          convertedValue = numericLength * cm.m;
          break;
        case "km":
          convertedValue = numericLength * cm.km;
          break;
        case "ft":
          convertedValue = numericLength * cm.ft;
          break;
        case "inch":
          convertedValue = numericLength * cm.inch;
          break;
        case "mile":
          convertedValue = numericLength * cm.mile;
          break;
        case "yard":
          convertedValue = numericLength * cm.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "m":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * m.mm;
          break;
        case "cm":
          convertedValue = numericLength * m.cm;
          break;
        case "km":
          convertedValue = numericLength * m.km;
          break;
        case "ft":
          convertedValue = numericLength * m.ft;
          break;
        case "inch":
          convertedValue = numericLength * m.inch;
          break;
        case "mile":
          convertedValue = numericLength * m.mile;
          break;
        case "yard":
          convertedValue = numericLength * m.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "km":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * km.mm;
          break;
        case "cm":
          convertedValue = numericLength * km.cm;
          break;
        case "m":
          convertedValue = numericLength * km.m;
          break;
        case "ft":
          convertedValue = numericLength * km.ft;
          break;
        case "inch":
          convertedValue = numericLength * km.inch;
          break;
        case "mile":
          convertedValue = numericLength * km.mile;
          break;
        case "yard":
          convertedValue = numericLength * km.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "ft":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * ft.mm;
          break;
        case "cm":
          convertedValue = numericLength * ft.cm;
          break;
        case "m":
          convertedValue = numericLength * ft.m;
          break;
        case "km":
          convertedValue = numericLength * ft.km;
          break;
        case "inch":
          convertedValue = numericLength * ft.inch;
          break;
        case "mile":
          convertedValue = numericLength * ft.mile;
          break;
        case "yard":
          convertedValue = numericLength * ft.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "inch":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * inch.mm;
        case "cm":
          convertedValue = numericLength * inch.cm;
          break;
        case "m":
          convertedValue = numericLength * inch.m;
          break;
        case "km":
          convertedValue = numericLength * inch.km;
          break;
        case "ft":
          convertedValue = numericLength * inch.ft;
          break;
        case "mile":
          convertedValue = numericLength * inch.mile;
          break;
        case "yard":
          convertedValue = numericLength * inch.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "mile":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * mile.mm;
          break;
        case "cm":
          convertedValue = numericLength * mile.cm;
          break;
        case "m":
          convertedValue = numericLength * mile.m;
          break;
        case "km":
          convertedValue = numericLength * mile.km;
          break;
        case "ft":
          convertedValue = numericLength * mile.ft;
          break;
        case "inch":
          convertedValue = numericLength * mile.inch;
          break;
        case "yard":
          convertedValue = numericLength * mile.yard;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "yard":
      switch (convertTo) {
        case "mm":
          convertedValue = numericLength * yard.mm;
          break;
        case "cm":
          convertedValue = numericLength * yard.cm;
          break;
        case "m":
          convertedValue = numericLength * yard.m;
          break;
        case "km":
          convertedValue = numericLength * yard.km;
          break;
        case "ft":
          convertedValue = numericLength * yard.ft;
          break;
        case "inch":
          convertedValue = numericLength * yard.inch;
          break;
        case "mile":
          convertedValue = numericLength * yard.mile;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
  }

  res.send(
    `<h3>Results of your calculation</h3>
    <h3>${numericLength} ${convertFrom} = ${convertedValue} ${convertTo}</h3>
    <button><a href="./convert-length">Reset</a></button>`
  );
});

//post route for weight
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

//post route for temperature
app.post("/convert-temperature", (req, res) => {
  const { temperature, convertFrom, convertTo } = req.body;
  const numericTemperature = parseFloat(temperature);
  let convertedValue;

  switch (convertFrom) {
    case "fahrenheit":
      switch (convertTo) {
        case "kelvin":
          convertedValue = (numericTemperature - 459.76) * 1.8;
          break;
        case "celcius":
          convertedValue = (numericTemperature - 32) * (5 / 9);
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "kelvin":
      switch (convertTo) {
        case "fahrenheit":
          convertedValue = numericTemperature * 1.8 + 459.67;
          break;
        case "celcius":
          convertedValue = numericTemperature - 273.15;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
    case "celcius":
      switch (convertTo) {
        case "fahrenheit":
          convertedValue = numericTemperature * 1.8 + 32;
          break;
        case "kelvin":
          convertedValue = numericTemperature + 273.15;
          break;
        case "ounce":
          convertedValue = numericTemperature * kg.ounce;
          break;
        case "pound":
          convertedValue = numericTemperature * kg.pound;
          break;
        default:
          console.log("Convert from and Convert to, cannot be the same");
      }
      break;
  }

  res.send(
    `<h3>Results of your calculation</h3>
    <h3>${numericTemperature} ${convertFrom} = ${convertedValue} ${convertTo}</h3>
    <button><a href="./convert-temperature">Reset</a></button>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
