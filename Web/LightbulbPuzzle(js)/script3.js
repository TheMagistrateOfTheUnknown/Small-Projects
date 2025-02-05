const table3 = document.createElement("table");
let haladoT = new Array(10);
const buttonHalado = document.querySelector("#halado");
const div2 = document.querySelector("#haladoTabla");
//const div2 = document.querySelector("#haladoTabla")
let korteH = new Array(10);
make2dArrayH(10);
make2dArrayHK(10);
for (let index = 0; index < 10; index++) {
  let row = document.createElement("tr");
  for (let jindex = 0; jindex < 10; jindex++) {
    let cell = document.createElement("td");
    cell.classList.add("nagy");
    haladoT[index][jindex] = cell;
    row.append(cell);
  }
  table3.append(row);
}
div2.append(table3);
allitasSzammal(1, 5, 3, haladoT);
allitasSzammal(1, 7, 2, haladoT);
allitasSzammal(2, 1, 0, haladoT);
allitasSzammal(4, 1, 1, haladoT);
allitasSzammal(4, 5, 1, haladoT);
allitasSzammal(5, 8, 3, haladoT);
allitasSzammal(7, 2, 1, haladoT);
allitasSzammal(7, 7, 0, haladoT);
allitasSzammal(8, 0, 3, haladoT);
allitasSzammal(8, 4, 0, haladoT);
allitasSzammal(9, 8, 0, haladoT);
allitasSzamNelkul(0, 1, haladoT);
allitasSzamNelkul(1, 9, haladoT);
allitasSzamNelkul(2, 2, haladoT);
allitasSzamNelkul(2, 7, haladoT);
allitasSzamNelkul(3, 4, haladoT);
allitasSzamNelkul(4, 4, haladoT);
allitasSzamNelkul(4, 6, haladoT);
allitasSzamNelkul(5, 3, haladoT);
allitasSzamNelkul(5, 4, haladoT);
allitasSzamNelkul(5, 5, haladoT);
allitasSzamNelkul(6, 5, haladoT);
allitasSzamNelkul(7, 8, haladoT);
allitasSzamNelkul(8, 2, haladoT);
let start1;

function make2dArrayH(meret) {
  haladoT = new Array(meret);
  for (let index = 0; index < haladoT.length; index++) {
    haladoT[index] = new Array(meret);
  }
  for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      haladoT[i][j] = 0;
    }
  }
}
function make2dArrayHK(meret) {
  korteH = new Array(meret);
  for (let index = 0; index < korteH.length; index++) {
    korteH[index] = new Array(meret);
  }
  for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      korteH[i][j] = 0;
    }
  }
}

function next() {
  let end = Date.now();
  let elapsed = end - start1;
  elapsed = elapsed / 1000;
  let seconds = Math.floor(elapsed % 60);
  elapsed = Math.floor(elapsed / 60);
  let minutes = elapsed % 60;
  elapsed = Math.floor(elapsed / 60);
  let hours = elapsed % 24;
  idoDiv.innerHTML =
  "Jatekos neve :" + nev + " " + hours + ":" + minutes + ":" + seconds;

  for (let index = 0; index < 10; index++) {
    for (let jindex = 0; jindex < 10; jindex++) {
      haladoT[index][jindex].addEventListener("click", szinez);
    }
  }
  fekete(korteH, haladoT);
  for (let i = 0; i < haladoT.length; i++) {
    //const element = array[i];
    for (let j = 0; j < haladoT.length; j++) {
      //const element = array[j];
      if (korteH[i][j] == 3 && !haladoT[i][j].classList.contains("korte")) {
        szinezFug2(i, j, haladoT, korteH);
        szinezViz1(i, j, haladoT, korteH);
        korteH[i][j] = 0;
      }
    }
  }
  for (let index = 0; index < haladoT.length; index++) {
    for (let jindex = 0; jindex < haladoT.length; jindex++) {
      if (haladoT[index][jindex].classList.contains("korte")) {
        korteH[index][jindex] = 3;
        szinezFug(index, jindex, haladoT, korteH);
        szinezViz(index, jindex, haladoT, korteH);
        //jindex= szam10
      }
    }
  }
  let vege = true;
  feketeKorul(haladoT, korteH);
  if (isOver(haladoT)) {
    if (korteNezo(korteH)) {
      //console.log("Igen")
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

      //idoDiv.innerHTML = `Jatekos neve : ${nev} ido : ${hours}:${minutes}:${seconds}`
    }
  }
  if (
    div1.classList.contains("hidden") &&
    div.classList.contains("hidden") &&
    vege &&
    !changeP.classList.contains("hidden")
  ) {
    requestAnimationFrame(next);
  }
}
buttonHalado.addEventListener("click", () => {
  div2.classList.remove("hidden");
  div1.classList.add("hidden");
  div.classList.add("hidden");
});
mentes.addEventListener("click",()=>
{
    //localStorage.korte = JSON.stringify(korte)
    //localStorage.korteK = JSON.stringify(korteK)
    localStorage.korteH = JSON.stringify(korteH)
    localStorage.nev = nev
})
if (localStorage.korteH) {
    betoltes.style.opacity = 1
    //console.log()
  //korteK = JSON.parse(localStorage.korteK);
  //korteK = JSON.parse(localStorage.korteK);
  korteH =JSON.parse(localStorage.korteH);
  nev = localStorage.nev
  betoltes.addEventListener("click", () => {
    betolt(korteH, haladoT);
    //betolt(korteK, kozepesT);
    //betolt(korteH, haladoT);
    //localStorage.clear()
  });
}
else{
    betoltes.style.opacity = 0.5
}

