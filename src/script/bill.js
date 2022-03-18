/* eslint-disable semi */
function calculateBill (billamount, taxRate = 0.13, tiprate = 0.15) {
  console.log('Running calculate Bill');
  console.log(' billamount :' + billamount + ' taxrate :' + taxRate + ' tiprate :' + tiprate);
  const total = billamount + billamount * taxRate + billamount * tiprate;
  return total;
}

calculateBill(100, 0.13);

calculateBill(100, 0.66);
// suppose above we want to pass the tiprate but not tax rate and want taxrate as default
calculateBill(100, undefined, 0.66);
