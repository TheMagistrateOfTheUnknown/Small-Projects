const table2 = document.createElement("table");
let kozepesT = new Array(7);
let korteK = new Array(7);
const buttonKozepes = document.querySelector("#kozepes");
const div1 = document.querySelector("#kozepesTabla");
make2dArrayK(7);
make2dArrayKK(7);
for (let index = 0; index < 7; index++) {
  let row = document.createElement("tr");
  for (let jindex = 0; jindex < 7; jindex++) {
    let cell = document.createElement("td");
    kozepesT[index][jindex] = cell;
    row.append(cell);
  }
  table2.append(row);
}
div1.append(table2);
allitasSzammal(0, 2, 0, kozepesT);
allitasSzammal(2, 4, 3, kozepesT);
allitasSzammal(3, 3, 1, kozepesT);
allitasSzammal(4, 0, 2, kozepesT);
allitasSzammal(6, 4, 2, kozepesT);
allitasSzamNelkul(0, 4, kozepesT);
allitasSzamNelkul(2, 0, kozepesT);
allitasSzamNelkul(2, 2, kozepesT);
allitasSzamNelkul(2, 6, kozepesT);
allitasSzamNelkul(4, 2, kozepesT);
allitasSzamNelkul(4, 4, kozepesT);
allitasSzamNelkul(4, 6, kozepesT);
allitasSzamNelkul(6, 2, kozepesT);
let start2;
function make2dArrayK(meret) {
  kozepesT = new Array(meret);
  for (let index = 0; index < kozepesT.length; index++) {
    kozepesT[index] = new Array(meret);
  }
  for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      kozepesT[i][j] = 0;
    }
  }
}
function make2dArrayKK(meret) {
  korteK = new Array(meret);
  for (let index = 0; index < korteK.length; index++) {
    korteK[index] = new Array(meret);
  }
  for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      korteK[i][j] = 0;
    }
  }
}

function nextKo() {
  let end = Date.now();
  let elapsed = end - start2;
  elapsed = elapsed / 1000;
  let seconds = Math.floor(elapsed % 60);
  localStorage.seconds = seconds;
  elapsed = Math.floor(elapsed / 60);
  let minutes = elapsed % 60;
  elapsed = Math.floor(elapsed / 60);
  let hours = elapsed % 24;
  localStorage.hours = hours;
  idoDiv.innerHTML =
  "Jatekos neve :" + nev + " " + hours + ":" + minutes + ":" + seconds; 
  for (let index = 0; index < 7; index++) {
    for (let jindex = 0; jindex < 7; jindex++) {
      kozepesT[index][jindex].addEventListener("click", szinez);
    }
  }
  for (let i = 0; i < kozepesT.length; i++) {
    //const element = array[i];
    for (let j = 0; j < kozepesT.length; j++) {
      //const element = array[j];
      if (korteK[i][j] == 3 && !kozepesT[i][j].classList.contains("korte")) {
        szinezFug2(i, j, kozepesT, korteK);
        szinezViz1(i, j, kozepesT, korteK);
        korteK[i][j] = 0;
      }
    }
  }
  fekete(korteK, kozepesT);
  for (let index = 0; index < kozepesT.length; index++) {
    for (let jindex = 0; jindex < kozepesT.length; jindex++) {
      if (kozepesT[index][jindex].classList.contains("korte")) {
        //korteAzonos(kozepesT,index,jindex)
        korteK[index][jindex] = 3;
        szinezFug(index, jindex, kozepesT, korteK);
        szinezViz(index, jindex, kozepesT, korteK);
        //jindex= szam10
      }
    }
  }
  let vege = true;
  feketeKorul(kozepesT, korteK);
  if (isOver(kozepesT)) {
    if (korteNezo(korteK)) {
      //             console.log("Igen")
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
    div2.classList.contains("hidden") &&
    div.classList.contains("hidden") &&
    vege &&
    !changeP.classList.contains("hidden")
  ) {
    requestAnimationFrame(nextKo);
  }
}
mentes.addEventListener("click",()=>
{
    //localStorage.korte = JSON.stringify(korte)
    localStorage.korteK = JSON.stringify(korteK)
    //localStorage.korteH = JSON.stringify(korteH)
    localStorage.nev = nev
})
if (localStorage.korteK) {
    betoltes.style.opacity = 1
    console.log()
  korteK = JSON.parse(localStorage.korteK);
  //korteK = JSON.parse(localStorage.korteK);
  //korteH =JSON.parse(localStorage.korteH);
  nev = localStorage.nev
  betoltes.addEventListener("click", () => {
    betolt(korteK, kozepesT);
    //betolt(korteK, kozepesT);
    //betolt(korteH, haladoT);
    //localStorage.clear()
  });
}
else{
    betoltes.style.opacity = 0.5
}
