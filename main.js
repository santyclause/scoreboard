let teamsARR = [
  0, 30, 0, 5, 0, 0, 0, 0, 0, 0
]

let teamObj = {
  green: 0,
  blue: 0,
  red: 0
}


let rScore = 0;
let bScore = 0;
let gScore = 0;
let pScore = 0;
let oScore = 0;
let yScore = 0;
const teams = document.getElementById("teams");
const addTeamBtn = document.getElementById("add-team");
let teamCount = 2;

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
      pScore += numIncr;
      score = pScore;
      teamElement = document.getElementById("p-team-score");
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
    default:
      console.log("Uh oh");
  }

  teamElement.innerText = score;
}

function addTeam() {
  switch (teamCount) {
    case 2:
      addGreen();
      teamCount++;
      break;
    case 3:
      addPurple();
      teamCount++;
      break;
    case 4:
      addOrange();
      teamCount++;
      break;
    case 5:
      addYellow();
      teamCount++;
      removeButton();
      break;
    default:
      console.log("UH OH");
  }
}

function addGreen() {
  teams.innerHTML += `
    <div class="col-12 col-md container-fluid">
      <section class="team brdr row green">
        <div id="g-team-score" class="col-12 scores green">0</div>
        <div class="col-12 team-name green">GREEN TEAM</div>
        <div class="col-12"><button onclick="increment(1,'green')" class="increment-btn brdr green">+1</button></div>
        <div class="col-12"><button onclick="increment(5,'green')" class="increment-btn brdr green">+5</button></div>
        <div class="col-12"><button onclick="increment(10,'green')" class="increment-btn brdr green">+10</button></div>
      </section>
      </div> `;
}

function addPurple() {
  teams.innerHTML += `
    <div class="col-12 col-md container-fluid">
      <section class="team brdr row purple">
        <div id="p-team-score" class="col-12 scores purple">0</div>
        <div class="col-12 team-name purple">PURPLE TEAM</div>
        <div class="col-12"><button onclick="increment(1,'purple')" class="increment-btn brdr purple">+1</button></div>
        <div class="col-12"><button onclick="increment(5,'purple')" class="increment-btn brdr purple">+5</button></div>
        <div class="col-12"><button onclick="increment(10,'purple')" class="increment-btn brdr purple">+10</button></div>
      </section>
      </div> `;
}

function addOrange() {
  teams.innerHTML += `
    <div class="col-12 col-md container-fluid">
      <section class="team brdr row orange">
        <div id="o-team-score" class="col-12 scores orange">0</div>
        <div class="col-12 team-name orange">ORANGE TEAM</div>
        <div class="col-12"><button onclick="increment(1,'orange')" class="increment-btn brdr orange">+1</button></div>
        <div class="col-12"><button onclick="increment(5,'orange')" class="increment-btn brdr orange">+5</button></div>
        <div class="col-12"><button onclick="increment(10,'orange')" class="increment-btn brdr orange">+10</button></div>
      </section>
      </div> `;
}

function addYellow() {
  teams.innerHTML += `
    <div class="col-12 col-md container-fluid">
      <section class="team brdr row yellow">
        <div id="y-team-score" class="col-12 scores yellow">0</div>
        <div class="col-12 team-name yellow">YELLOW TEAM</div>
        <div class="col-12"><button onclick="increment(1,'yellow')" class="increment-btn brdr yellow">+1</button></div>
        <div class="col-12"><button onclick="increment(5,'yellow')" class="increment-btn brdr yellow">+5</button></div>
        <div class="col-12"><button onclick="increment(10,'yellow')" class="increment-btn brdr yellow">+10</button></div>
      </section>
      </div> `;
}

function removeButton() {
  addTeamBtn.style.opacity = 0;
  addTeamBtn.style.cursor = "unset";
}