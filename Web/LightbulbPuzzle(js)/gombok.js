//start gomb
stastButton.addEventListener("click", () => {
  nev = document.querySelector("#ss").value;
  buttonKonnyu.classList.remove("rejtett");
  buttonKozepes.classList.remove("rejtett");
  buttonHalado.classList.remove("rejtett");
  ujGomb.classList.remove("rejtett");
  stastButton.classList.add("rejtett");
  leiras.classList.remove("rejtett");
  add1.classList.add("rejtett");
  betoltes.classList.remove("rejtett");
  mentes.classList.remove("rejtett");
  
});
//játék leírás vissza
vissza.addEventListener("click", () => {
  ujGomb.classList.remove("rejtett");
  div2.classList.add("hidden");
  div1.classList.add("hidden");
  div.classList.add("hidden");
  buttonKonnyu.classList.remove("rejtett");
  buttonKozepes.classList.remove("rejtett");
  buttonHalado.classList.remove("rejtett");
  idoDiv.classList.add("rejtett");
  changeP.classList.add("rejtett");
  jatek.classList.add("rejtett");
  vissza.classList.add("rejtett");
  leiras.classList.remove("rejtett");
  betoltes.classList.remove("rejtett");
  mentes.classList.remove("rejtett");
});
//feladat leírás
leiras.addEventListener("click", () => {
  div.classList.add("hidden");
  div1.classList.add("hidden");
  div2.classList.add("hidden");
  idoDiv.classList.add("rejtett");
  buttonKonnyu.classList.add("rejtett");
  buttonKozepes.classList.add("rejtett");
  buttonHalado.classList.add("rejtett");
  add1.classList.add("rejtett");
  stastButton.classList.add("rejtett");
  ujGomb.classList.add("rejtett");
  jatek.classList.remove("rejtett");
  vissza.classList.remove("rejtett");
  leiras.classList.add("rejtett");
  betoltes.classList.add("rejtett");
  mentes.classList.add("rejtett");
});
//konnyu elinditasa
buttonKonnyu.addEventListener("click", () => {
  start = Date.now();
  div.classList.remove("hidden");
  div1.classList.add("hidden");
  div2.classList.add("hidden");
  jatekIndit();
  nextK();
});
//kozepes elindítása
buttonKozepes.addEventListener("click", () => {
  start2 = Date.now();
  div1.classList.remove("hidden");
  div.classList.add("hidden");
  div2.classList.add("hidden");
  jatekIndit();
  nextKo();
});
//halado elinditasa
buttonHalado.addEventListener("click", () => {
  start1 = Date.now();
  div2.classList.remove("hidden");
  div1.classList.add("hidden");
  div.classList.add("hidden");
  jatekIndit();
  next();
});
//uj játék indítása
ujGomb.addEventListener("click", () => {
  ujra(korte, konnyuT);
  ujra(korteK, kozepesT);
  ujra(korteH, haladoT);
  div.classList.add("hidden");
  div1.classList.add("hidden");
  div2.classList.add("hidden");
  idoDiv.classList.add("rejtett");
  buttonKonnyu.classList.add("rejtett");
  buttonKozepes.classList.add("rejtett");
  buttonHalado.classList.add("rejtett");
  add1.classList.remove("rejtett");
  stastButton.classList.remove("rejtett");
  ujGomb.classList.add("rejtett");
  leiras.classList.add("rejtett");
  betoltes.classList.add("rejtett");
  mentes.classList.add("rejtett");
});
//másik pályaválasztás
changeP.addEventListener("click", () => {
  ujGomb.classList.remove("rejtett");
  div2.classList.add("hidden");
  div1.classList.add("hidden");
  div.classList.add("hidden");
  buttonKonnyu.classList.remove("rejtett");
  buttonKozepes.classList.remove("rejtett");
  buttonHalado.classList.remove("rejtett");
  idoDiv.classList.add("rejtett");
  changeP.classList.add("rejtett");
  leiras.classList.remove("rejtett");
  betoltes.classList.remove("rejtett");
  mentes.classList.remove("rejtett");
});
//mentés konnyu
mentes.addEventListener("click", () => {
  localStorage.korte = JSON.stringify(korte);
  localStorage.nev =(nev);
  //console.log(localStorage.nev)
});
function jatekIndit() {
  idoDiv.classList.remove("rejtett");
  buttonKonnyu.classList.add("rejtett");
  buttonKozepes.classList.add("rejtett");
  buttonHalado.classList.add("rejtett");
  ujGomb.classList.add("rejtett");
  changeP.classList.remove("rejtett");
  leiras.classList.add("rejtett");
  betoltes.classList.add("rejtett");
  mentes.classList.add("rejtett");
}
