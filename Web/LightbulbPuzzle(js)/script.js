const buttonKonnyu = document.querySelector("#konnyu");
const idoDiv = document.querySelector("#elapsed");
const stastButton = document.querySelector("#start");
const table1 = document.createElement("table");
const add1 = document.querySelector("#rejt");
const changeP = document.querySelector("#changeBoard");
const vissza = document.querySelector("#vissza");
const leiras = document.querySelector("#leiras");
const jatek = document.querySelector("#szoveg");
const betoltes = document.querySelector("#betolt");
const mentes = document.querySelector("#mentes");
const body = document.querySelector("body")
let nev;
let konnyuT = new Array(7);
const ujGomb = document.querySelector("#newGame");
const div = document.querySelector("#konnyuTabla");
let korte = new Array(7);
let mentes_s = 0
let mentes_m = 0
let mentes_h = 0
make2dArray(7);
make2dArrayT(7);
for (let index = 0; index < 7; index++) {
  let row = document.createElement("tr");
  for (let jindex = 0; jindex < 7; jindex++) {
    let cell = document.createElement("td");
    konnyuT[index][jindex] = cell;
    row.append(cell);
  }
  table1.append(row);
}
div.append(table1);
allitasSzammal(0, 3, 1, konnyuT);
allitasSzammal(1, 1, 0, konnyuT);
allitasSzammal(1, 5, 2, konnyuT);
allitasSzamNelkul(3, 0, konnyuT);
allitasSzamNelkul(3, 6, konnyuT);
allitasSzamNelkul(3, 3, konnyuT);
allitasSzammal(5, 5, 2, konnyuT);
allitasSzamNelkul(5, 1, konnyuT);
allitasSzammal(6, 3, 3, konnyuT);
//Megjelenítés
let start;
if (localStorage.korte) {
 
  //nev = localStorage.nev
     betoltes.addEventListener("click", () => {
    betoltes.style.opacity = 1
    korte = JSON.parse(localStorage.korte);
    //console.log(String(localStorage.nev))
    //console.log("A betoltoltt nev : "+localStorage.nev)
    nev = localStorage.nev
    //console.log("A nev  : "+ nev)
    betolt(korte, konnyuT);
    localStorage.clear()
});
}
else{
  betoltes.style.opacity = 0.5
  
}

let valtozo = true
const rejtett = document.querySelector("#rejtett");
function nextK() {
  let end = Date.now();
  let elapsed = end - start;
  elapsed = elapsed / 1000;
  let seconds = Math.floor(elapsed % 60);

  elapsed = Math.floor(elapsed / 60);
  let minutes = elapsed % 60;
  elapsed = Math.floor(elapsed / 60);
  let hours = elapsed % 24;
  idoDiv.innerHTML =
  "Játékos neve :" + nev + " " + hours + ":" + minutes + ":" + seconds; 

    for (let index = 0; index < 7; index++) {
    for (let jindex = 0; jindex < 7; jindex++) {
      konnyuT[index][jindex].addEventListener("click", szinez);
    }
  }
  for (let i = 0; i < konnyuT.length; i++) {
    for (let j = 0; j < konnyuT.length; j++) {
      if (korte[i][j] == 3 && !konnyuT[i][j].classList.contains("korte")) {
        szinezFug2(i, j, konnyuT, korte);
        szinezViz1(i, j, konnyuT, korte);
        korte[i][j] = 0;
      }
    }
  }
  fekete(korte, konnyuT);
  for (let index = 0; index < konnyuT.length; index++) {
    for (let jindex = 0; jindex < konnyuT.length; jindex++) {
      if (konnyuT[index][jindex].classList.contains("korte")) {
        korte[index][jindex] = 3;
        szinezFug(index, jindex, konnyuT, korte);
        szinezViz(index, jindex, konnyuT, korte);
      }
    }
  }
  let vege = true;
  feketeKorul(konnyuT, korte);
  if (isOver(konnyuT)) {
    if (korteNezo(korte)) {
      vege = false;      
      idoDiv.innerHTML =
        "Jatek vege! Jatekos neve : " +
        nev +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    }
  }
  if (
    div1.classList.contains("hidden") &&
    div2.classList.contains("hidden") &&
    vege &&
    !changeP.classList.contains("hidden")
  ) {
    requestAnimationFrame(nextK);
  }
}
function isOver(tomb) {
  let db = 0;
  for (let i = 0; i < tomb.length; i++) {
    //const element = array[i];
    for (let j = 0; j < tomb.length; j++) {
      if (
        !tomb[i][j].classList.contains("black") &&
        !tomb[i][j].classList.contains("yellow") &&
        !tomb[i][j].classList.contains("korte")
      ) {
        return false;
      }
      if (tomb[i][j].classList.contains("blackRossz")) {
        return false;
      }
      if (tomb[i][j].classList.contains("blackJo")) {
        db++;
      }
    }
  }

  if (db == megSzamol(tomb)) {
    return true;
  } else return false;
}
function megSzamol(tomb) {
  let db = 0;
  for (let i = 0; i < tomb.length; i++) {
    //const element = array[i];
    for (let j = 0; j < tomb.length; j++) {
      if (
        tomb[i][j].classList.contains("black") &&
        tomb[i][j].innerHTML != ""
      ) {
        db++;
      }
    }
  }
  return db;
}
function fekete(tomb, tomb1) {
  for (let i = 0; i < tomb.length; i++) {
    //const element = array[i];
    for (let j = 0; j < tomb.length; j++) {
      if (tomb1[i][j].classList.contains("black")) {
        tomb[i][j] = -1;
      }
    }
  }
}
function szinezViz(i, j, tomb, tomb1) {
  for (let index = j + 1; index < tomb.length; index++) {
    if (tomb[i][index].classList.contains("black")) {
      break;
    }
    if (tomb[i][index].classList.contains("korte")) {
      tomb[i][index].classList.remove("yellow");
      tomb[i][j].classList.add("korteRed");
      tomb[i][index].classList.add("korteRed");

      break;
    }
    tomb[i][index].classList.add("yellow");
    tomb1[i][index] = 2;
  }
  for (let index = j - 1; index > -1; index--) {
    //const element = array[index];
    if (tomb[i][index].classList.contains("black")) {
      break;
    }
    if (tomb[i][index].classList.contains("korte")) {
      tomb[i][index].classList.remove("yellow");
      tomb[i][j].classList.add("korteRed");
      tomb[i][index].classList.add("korteRed");

      break;
    }
    tomb[i][index].classList.add("yellow");
    tomb1[i][index] = 2;
  }
}
function szinezFug(i, j, tomb, tomb1) {
  for (let index = i + 1; index < tomb.length; index++) {
    if (tomb[index][j].classList.contains("black")) {
      break;
    }
    if (tomb[index][j].classList.contains("korte")) {
      tomb[index][j].classList.remove("yellow");
      tomb[i][j].classList.add("korteRed");
      tomb[index][j].classList.add("korteRed");
      break;
    }
    tomb[index][j].classList.add("yellow");
    tomb1[index][j] = 2;
  }
  for (let index = i - 1; index > -1; index--) {
    //const element = array[index];
    if (tomb[index][j].classList.contains("black")) {
      break;
    }
    if (tomb[index][j].classList.contains("korte")) {
      tomb[index][j].classList.remove("yellow");
      tomb[i][j].classList.add("korteRed");
      tomb[index][j].classList.add("korteRed");
      break;
    }
    tomb[index][j].classList.add("yellow");
    tomb1[index][j] = 2;
  }
}

function szinez(e) {
  if (e.target.matches("td")) {
    if (e.target.classList.contains("black")) console.log("ihe");
    else {
      e.target.classList.toggle("korte");
    }
  }
}
function make2dArray(meret) {
  konnyuT = new Array(meret);
  for (let index = 0; index < konnyuT.length; index++) {
    konnyuT[index] = new Array(meret);
  }
  for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      konnyuT[i][j] = 0;
    }
  }
}
function make2dArrayT(meret) {
  korte = new Array(meret);
  for (let index = 0; index < korte.length; index++) {
    korte[index] = new Array(meret);
  }
  for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      korte[i][j] = 0;
    }
  }
}
function allitasSzammal(i, j, szam, tomb) {
  tomb[i][j].innerHTML = szam;
  tomb[i][j].classList.add("black");
}
function allitasSzamNelkul(i, j, tomb) {
  tomb[i][j].classList.add("black");
}
function szinezViz1(i, j, tomb, tomb1) {
  for (let index = j + 1; index < tomb.length; index++) {
    if (tomb[i][index].classList.contains("black")) {
      tomb1[i][j] = -1;
      break;
    }
    if (tomb[i][index].classList.contains("korte")) {
      tomb[i][index].classList.remove("yellow");
      //tomb[i][index].classList.remove("korte")
      tomb[i][j].classList.remove("korte");
      tomb[i][index].classList.remove("korteRed");
      tomb[i][j].classList.remove("korteRed");
      break;
    }
    tomb[i][index].classList.remove("yellow");
    tomb1[i][index] = 0;
  }
  for (let index = j - 1; index > -1; index--) {
    //const element = array[index];
    if (tomb[i][index].classList.contains("black")) {
      tomb1[i][j] = -1;
      break;
    }
    if (tomb[i][index].classList.contains("korte")) {
      tomb[i][index].classList.remove("yellow");
      //tomb[i][index].classList.remove("korte")
      tomb[i][j].classList.remove("korte");
      tomb[i][index].classList.remove("korteRed");
      tomb[i][j].classList.remove("korteRed");

      break;
    }
    tomb[i][index].classList.remove("yellow");
    tomb1[i][index] = 0;
  }
}
function szinezFug2(i, j, tomb, tomb1) {
  for (let index = i + 1; index < tomb.length; index++) {
    if (tomb[index][j].classList.contains("black")) {
      tomb1[index][j] = -1;
      break;
    }
    if (tomb[index][j].classList.contains("korte")) {
      tomb[index][j].classList.remove("yellow");
      tomb[i][j].classList.remove("korteRed");
      tomb[index][j].classList.remove("korteRed");
      tomb[i][j].classList.remove("korte");
      //tomb[index][j].classList.remove("korte")
      break;
    }
    tomb[index][j].classList.remove("yellow");
    tomb1[index][j] = 0;
  }
  for (let index = i - 1; index > -1; index--) {
    if (tomb[index][j].classList.contains("black")) {
      tomb1[index][j] = -1;
      break;
    }
    if (tomb[index][j].classList.contains("korte")) {
      tomb[index][j].classList.remove("yellow");
      tomb[index][j].classList.remove("yellow");
      tomb[i][j].classList.remove("korteRed");
      tomb[index][j].classList.remove("korteRed");
      tomb[i][j].classList.remove("korte");
      //tomb[index][j].classList.remove("korte")
      break;
    }
    tomb[index][j].classList.remove("yellow");
    tomb1[index][j] = 0;
  }
}
function feketeKorul(tomb, tomb1) {
  let fekete_szam = 0;
  let db = 0;
  for (let i = 0; i < tomb1.length; i++) {
    for (let j = 0; j < tomb1.length; j++) {
      if (tomb[i][j].classList.contains("black")) {
        fekete_szam = tomb[i][j].innerHTML;
        if (fekete_szam != "") {
          db =
            db +
            dbSzam(i, j - 1, tomb1) +
            dbSzam(i, j + 1, tomb1) +
            dbSzam(i + 1, j, tomb1) +
            dbSzam(i - 1, j, tomb1);
          if (fekete_szam == db) {
            tomb[i][j].classList.add("blackJo");
            tomb[i][j].classList.remove("blackRossz");
          } else if (db > fekete_szam) {
            tomb[i][j].classList.remove("blackJo");
            tomb[i][j].classList.add("blackRossz");
          } else if (fekete_szam > db) {
            tomb[i][j].classList.remove("blackJo");
            tomb[i][j].classList.remove("blackRossz");
          }
        }

        db = 0;
      }
    }
  }
}
function dbSzam(i, j, tomb) {
  if (i < 0 || j < 0 || i > tomb.length - 1 || j > tomb.length - 1) {
    return 0;
  }
  if (tomb[i][j] == 3) {
    return 1;
  } else return 0;
}

function ujra(tomb, tomb1) {
  for (let i = 0; i < tomb.length; i++) {
    for (let j = 0; j < tomb.length; j++) {
      if (!tomb1[i][j].classList.contains("black")) {
        tomb1[i][j].classList.remove("yellow");
        tomb1[i][j].classList.remove("korte");
      }
      tomb[i][j] = 0;
    }
  }
}
function korteNezo(tomb) {
  let db = 0;
  for (let i = 0; i < tomb.length; i++) {
    for (let j = 0; j < tomb.length; j++) {
      if (tomb[i][j] == 3) {
        db++;
      }
      if (db > 1) {
        return false;
      }
      if (tomb[i][j] == -1) {
        db = 0;
      }
    }
    db = 0;
  }
  db = 0;
  for (let i = 0; i < tomb.length; i++) {
    for (let j = 0; j < tomb.length; j++) {
      if (tomb[j][i] == 3) db++;
      if (db > 1) return false;
      if (tomb[j][i] == -1) db = 0;
    }
    db = 0;
  }
  return true;
}



function betolt(tomb, tomb1) {
  for (let i = 0; i < tomb.length; i++) {
    for (let j = 0; j < tomb.length; j++) {
      if (tomb[i][j] == 3) {
        tomb1[i][j].classList.add("korte");
        szinezFug(i, j, tomb1, tomb);
        szinezViz(i, j, tomb1, tomb);
      }
    }
  }
}
