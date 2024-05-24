let buy = document.querySelectorAll("#buy");
let sell = document.querySelectorAll("#sell");

buy.forEach((ele) => {
  ele.classList.add("text-green-400");
  ele.classList.add("uppercase");
  ele.classList.add("font-bold");
});

sell.forEach((ele) => {
  ele.classList.add("text-red-600");
  ele.classList.add("uppercase");
  ele.classList.add("font-bold");
});

class SignalCard {
  constructor(signal) {
    this.signal = signal;
  }
}

// Create pop up function

let cardPurchase = () => {
  let card = document.querySelectorAll("#coin-card");
  card.forEach((card) => {
    card.addEventListener("click", () => {
      // Here add a popup providing a card to the user to buy the signal
    });
  });
};

cardPurchase();
