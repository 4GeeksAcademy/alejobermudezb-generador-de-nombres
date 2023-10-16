/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["Arepas", "Empanada"];
let adj = ["con", "de"];
let noun = ["reinapepiada", "pollo", "carnemechada", "jamon y queso"];
let ext = ["com", "net", "es"];

// Función para generar nombres
function generateDomainNames() {
  let domainNames = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k];
          if (ext[l] == "us" && domain.endsWith("us")) {
            domainNames.push(domain.slice(0, -2) + "." + ext[l]);
          } else {
            domainNames.push(domain + "." + ext[l]);
          }
        }
      }
    }
  }
  return domainNames;
}

// Función para mostrar un nombre aleatorio
function displayRandomDomainName() {
  let domainNames = generateDomainNames();
  let randomIndex = Math.floor(Math.random() * domainNames.length);
  document.getElementById("domain").textContent = domainNames[randomIndex];
}

window.onload = function() {
  // Mostrar un nombre aleatorio al cargar la página
  displayRandomDomainName();

  document
    .getElementById("generate-domain-btn")
    .addEventListener("click", function() {
      displayRandomDomainName();
    });
};
