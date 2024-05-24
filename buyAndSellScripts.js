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

  setImage() {
    if (signal.toLowerCase() === "buy") {
      let signalImage = document.querySelector("#signal-image");
      signalImage.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXB3YXJkJTIwdHJlbmR8ZW58MHx8MHx8fDA%3D"
      );
    } else {
      signalImage.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1635236198091-33d5aa8466cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG93biUyMHRyZW5kfGVufDB8fDB8fHww"
      );
    }
  }
}

// let card = document.querySelectorAll("#card");

// card.forEach((card) => {
//   // if(card.nextSibling.nextSibling)
//     let buySignalForThisCard = document.get
// });
