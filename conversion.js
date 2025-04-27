//units for length
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

//units for weights
const mg = {
  g: 0.001,
  kg: 0.000001,
  ounce: 0.00003527396,
  pound: 0.000002204623,
};

const g = {
  mg: 1000,
  kg: 0.001,
  ounce: 0.03527396,
  pound: 0.002204623,
};
const kg = {
  g: 1000,
  mg: 1000000,
  ounce: 35.27396,
  pound: 2.204623,
};
const ounce = {
  g: 28.34952,
  kg: 0.02834952,
  mg: 28349.52,
  pound: 0.0625,
};
const pound = {
  g: 453.5924,
  kg: 0.4535924,
  ounce: 16,
  mg: 453592.4,
};

//length exports
export { mm, cm, m, km, ft, inch, mile, yard };

//weight exports
export { mg, g, kg, ounce, pound };
