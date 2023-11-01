const parent = document.querySelector(".parent");

// parent.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

let count = 1;

// show move notification
document.querySelector(".move-player-1").textContent = "X's move";

const completedIndex = [];

const winnerArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

// console.log();
Array.from(parent.children).forEach((child) => {
  child.addEventListener("click", (e) => {
    if (!e.currentTarget.children[0].textContent && count % 2 === 1) {
      count += 1;
      e.currentTarget.children[0].textContent = "X";
      document.querySelector(".move-player-2").textContent = "0's move";
      document.querySelector(".move-player-1").textContent = "";
      completedIndex[
        e.currentTarget.children[0].getAttribute("data-position")
      ] = "X";
    } else if (!e.currentTarget.children[0].textContent && count % 2 === 0) {
      count += 1;
      e.currentTarget.children[0].textContent = "O";
      document.querySelector(".move-player-1").textContent = "X's move";
      document.querySelector(".move-player-2").textContent = "";
      completedIndex[
        e.currentTarget.children[0].getAttribute("data-position")
      ] = "O";
    }
    // winner

    winnerArray.forEach((item) => {
      if (
        completedIndex[item[0]] === completedIndex[item[1]] &&
        completedIndex[item[1]] === completedIndex[item[2]]
      ) {
        if (completedIndex[item[0]] === "X") {
          XWinner();
        } else if (completedIndex[item[0]] === "O") {
          OWinner();
        }
      }
    });

    // start linear x
    // if (
    //   completedIndex[0] === completedIndex[1] &&
    //   completedIndex[1] === completedIndex[2]
    // ) {
    //   if (completedIndex[0] === "X") {
    //     XWinner();
    //   } else if (completedIndex[0] === "O") {
    //     OWinner();
    //   }
    // }
    // end linear x

    // start linear y
  });
});

function XWinner() {
  document.querySelector(".move-player-1").textContent = "X is winner";
  document.querySelector(".move-player-2").textContent = "";
}

function OWinner() {
  document.querySelector(".move-player-2").textContent = "O is winner";
  document.querySelector(".move-player-1").textContent = "";
}
