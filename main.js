let rScore = 0;
let bScore = 0;
let gScore = 0;
let puScore = 0;
let oScore = 0;
let yScore = 0;
let pScore = 0;

function increment(numIncr, team) {
  let teamElement;
  let score;
  switch (team) {
    case "red":
      rScore += numIncr;
      score = rScore;
      teamElement = document.getElementById("r-team-score");
      break;
    case "blue":
      bScore += numIncr;
      score = bScore;
      teamElement = document.getElementById("b-team-score");
      break;
    case "green":
      gScore += numIncr;
      score = gScore;
      teamElement = document.getElementById("g-team-score");
      break;
    case "purple":
      puScore += numIncr;
      score = puScore;
      teamElement = document.getElementById("pu-team-score");
      break;
    case "orange":
      oScore += numIncr;
      score = oScore;
      teamElement = document.getElementById("o-team-score");
      break;
    case "yellow":
      yScore += numIncr;
      score = yScore;
      teamElement = document.getElementById("y-team-score");
      break;
    case "pink":
      pScore += numIncr;
      score = pScore;
      teamElement = document.getElementById("p-team-score");
      break;
    default:
      console.log("Uh oh");
  }

  teamElement.innerText = score;


}