const cardNumber = document.querySelector(".number");
const cardName = document.querySelector(".name");
const cardExpiry = document.querySelector(".valid-date h5");

const numberInput = document.getElementById("cardNumberInput");
const nameInput = document.getElementById("cardNameInput");
const expiryInput = document.getElementById("cardExpiryInput");

numberInput.addEventListener("input", function () {
  let inputVal = this.value.replace(/\D/g, "").slice(0, 16);
  let formatted = inputVal.match(/.{1,4}/g)?.join(" ") || "";
  this.value = formatted;
  cardNumber.textContent = formatted.padEnd(19, "*");
});

nameInput.addEventListener("input", function () {
  let val = this.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 22);
  this.value = val;
  cardName.textContent = val || "Mr. Cardholder";
});

expiryInput.addEventListener("input", function () {
  let val = this.value.replace(/[^0-9]/g, "").slice(0, 4);
  if (val.length >= 3) {
    val = `${val.slice(0, 2)}/${val.slice(2, 4)}`;
  }
  this.value = val;
  cardExpiry.textContent = val || "MM/YY";
});
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.card-style-toggle button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    container.classList.remove('bg1', 'bg2', 'bg3', 'bg4', 'bg5');
    container.classList.add(button.dataset.bg);
  });
});
