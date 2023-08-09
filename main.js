const range = document.getElementById("tipRange");
const tipOut = document.getElementById("percentOut");
const btnCalculate = document.getElementById("btnCalculate");
const billAmount = document.getElementById("billAmount");
const resultArea = document.getElementById("result");
// const user = document.getElementById("name1");

range.ondrag = function () {
  tipOut.innerHTML = range.value + "%";
};

btnCalculate.onclick = function () {
  // let user1 = parseFloat(user);
  let theBill = parseFloat(billAmount.value);
  let tip = (theBill * (range.value / 100)).toFixed(2);
  let total = (theBill + parseFloat(tip)).toFixed(2);
  let out = `<strong>VAT Amount:</strong> $${tip}<br/><strong>Total Bill:</strong> $${total}`;
  resultArea.innerHTML = out;
};

// <strong>Username:</strong> ${user1} <br/>

let login = function () {
  let username = document.getElementById("username").value;
  let billAmount = document.getElementById("billAmount").value;
};

if (
  username === "bob" &&
  "billAmount" === "value" &&
  "btnCalculate" === "value"
) {
  ons.notification.alert("Congratulations!");
} else {
  ons.notification.alert("Put a value.");
}
