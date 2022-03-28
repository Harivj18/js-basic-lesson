export function show() {
    const amt = document.getElementById("amount1").value;
    const display = document.getElementById("result");
    display.innerHTML = "$" +parseFloat(amt * 4.2) ;
  }