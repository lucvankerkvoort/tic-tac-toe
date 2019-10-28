import "./styles.css";

// NOTE: jQuery 3.1.1 is built-in to this environment
// Define global variables here as necessary

let clickCounter = 1;

$(document).on("click", ".tile", function() {
  if (clickCounter % 2) {
    $(this).text("O");
    clickCounter++;
  } else {
    $(this).text("X");
    clickCounter++;
  }

  console.log($(".tile").text());

  if (
    $(".tile.1").text() === "O" &&
    $(".tile.2").text() === "O" &&
    $(".tile.3").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.4").text() === "O" &&
    $(".tile.5").text() === "O" &&
    $(".tile.6").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.7").text() === "O" &&
    $(".tile.8").text() === "O" &&
    $(".tile.9").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.1").text() === "O" &&
    $(".tile.4").text() === "O" &&
    $(".tile.7").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.2").text() === "O" &&
    $(".tile.5").text() === "O" &&
    $(".tile.8").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.3").text() === "O" &&
    $(".tile.6").text() === "O" &&
    $(".tile.9").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.1").text() === "O" &&
    $(".tile.5").text() === "O" &&
    $(".tile.9").text() === "O"
  ) {
    winner("o");
  } else if (
    $(".tile.3").text() === "O" &&
    $(".tile.5").text() === "O" &&
    $(".tile.7").text() === "O"
  ) {
    winner("o");
  }

  if (
    $(".tile.1").text() === "X" &&
    $(".tile.2").text() === "X" &&
    $(".tile.3").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.4").text() === "X" &&
    $(".tile.5").text() === "X" &&
    $(".tile.6").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.7").text() === "X" &&
    $(".tile.8").text() === "X" &&
    $(".tile.9").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.1").text() === "X" &&
    $(".tile.4").text() === "X" &&
    $(".tile.7").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.2").text() === "X" &&
    $(".tile.5").text() === "X" &&
    $(".tile.8").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.3").text() === "X" &&
    $(".tile.6").text() === "X" &&
    $(".tile.9").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.1").text() === "X" &&
    $(".tile.5").text() === "X" &&
    $(".tile.9").text() === "X"
  ) {
    winner("x");
  } else if (
    $(".tile.3").text() === "X" &&
    $(".tile.5").text() === "X" &&
    $(".tile.7").text() === "X"
  ) {
    winner("x");
  }
});

const winner = player => {
  if (player === "x") {
    $("#game-status").text("Player 2 wins");
  } else {
    $("#game-status").text("Player 1 wins");
  }
};

// Part 1: Setup - Clicks in each square should show "X" and "O" on the board
// It can be assumed that each click will alternate "X" and "O", imitating that 2 people are playing the game

// Part 2: Logic - determine if there is a winner after each action, or if there is a draw at the end of the game

// Part 3: Styling
