// ####################################################
// ####################################################
//https://es.javascript.info/formdata

import { eventosIconos } from "./eventos.js";
import { imaxesEliminarGardarEditar } from "./Funcions/helpers.js";



export function insertoLista(){
let contador = 0;
envio.addEventListener("submit", (e) => {
  e.preventDefault(); // esta línea obligatoria
  contador++;
  console.log("contador ", contador);
  // #### Bloque 0 - creación de etiquetas necesarias

  let etiquetaDivCaixa = document.createElement("div");
  let etiquetaDivImaxen = document.createElement("div");
  //let etiquetaImaxen = document.createElement("img");
  etiquetaDivImaxen.className = "caixa-imaxen"
  etiquetaDivCaixa.className = "caixa";

  // ### Bloque 1 - inserción de elementos en elementos
  // ### PREPARANDO A CAIXA DE SAÍDA

  etiquetaDivCaixa.append(etiquetaDivImaxen);
  //etiquetaDivImaxen.append(etiquetaImaxen);

  // ####################################################

  let datosFormulario = new FormData(envio);

  for (let [name, value] of datosFormulario) {
    console.log(`${name} ${value}`);

    if (name === "Avatar") {
      let archivo = datosFormulario.get("Avatar");
      let imaxen = document.createElement("img");
      imaxen.src = URL.createObjectURL(archivo);
      imaxen.className = "imaxe-user";
      etiquetaDivImaxen.append(imaxen);
    } else {
      let etiquetaP = document.createElement("p");
      etiquetaP.className = "datos";
      etiquetaP.contentEditable = "false";
      etiquetaP.innerHTML = value;
      etiquetaDivCaixa.append(etiquetaP);
    }
    
  }
  let iconos = imaxesEliminarGardarEditar()
 for(let icono in iconos){
  etiquetaDivCaixa.append(iconos[`${icono}`])
 }
  eventosIconos(iconos)
  document.body.prepend(etiquetaDivCaixa);
})

}