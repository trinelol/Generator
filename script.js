const button = document.querySelector ("#button");
var ord = ["rapporteringsevner", "kvaliteter", "styrker", "samarbeidsevner", "holdninger", "kreative anlegg", "kritiske sanser","innstillinger", "evner", "ferdigheter", "kunnskaper", "vitser", "intervjuteknikker", "arbeidsmetoder", "dataferdigheter"];
var ord2 = ["skriver", "kvalitetssikrer", "oppmuntrer", "undersøker", "fungerer", "formidler", "håndterer", "forstår", "kan", "har lært", "respekterer", "fikser", "mestrer", "arbeider", "liker", "foretrekker", "skjønner", "løser", "jobber"];
var ord3 = ["Excel", "integritet", "fleksibilitet", "profesjonalitet", "en ja til alt-holdning", "kulturforskjeller","god arbeidsmoral", "intervjuteknikk", "html, css og javascript", "samarbeid", "viktigheten av datakvalitet", "å skrive touch","litt tysk, spansk og arabisk"];
var ord4 = ["omsorgsfulle", "presise", "smarte", "inkluderende", "relevante", "tilpasningsdyktige", "utadvente", "fleksible","positive", "strukturerte", "selvgående", "selvstendige", "raske", "supre", "utmerkede", "flinke", "effektive", "morsomme","nøyaktige", "detaljorienterte"];

function tilfeldigOrd(){
  var rand1 = Math.floor(Math.random() * ord.length);
  var rand2 = Math.floor(Math.random() * ord2.length);
  var rand3 = Math.floor(Math.random() * ord3.length);
  var rand4 = Math.floor(Math.random() * ord4.length);
  var content = " " + ord4[rand4] + " " + ord[rand1] + " " + ord2[rand2] + " " + ord3[rand3];
  var start = "Du skal ansette meg fordi mine"
  document.getElementById("setning").innerHTML = start + content;
}

function genererAarsak() {
  document.getElementById("setning").innerHTML = "&quot;" + content + "&quot;";
}

button.addEventListener("click", tilfeldigOrd);
