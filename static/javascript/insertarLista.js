// ####################################################
// ####################################################
//https://es.javascript.info/formdata

import { eventosIconos } from "./eventos.js";
import { imaxesEliminarGardarEditar } from "./Funcions/helpers.js";



export function insertoLista(){

envio.addEventListener("submit", (e) => {
  e.preventDefault(); // esta línea obligatoria
  
  // #### Bloque 0 - creación de etiquetas necesarias

  let etiquetaDivCaixa = document.createElement("div");
  let etiquetaDivImaxen = document.createElement("div");

  etiquetaDivImaxen.className = "caixa-imaxen";
  etiquetaDivCaixa.className = "caixa";

  // ### Bloque 1 - inserción de elementos en elementos
  // ### PREPARANDO A CAIXA DE SAÍDA

  etiquetaDivCaixa.append(etiquetaDivImaxen);

  // ####################################################

  let datosFormulario = new FormData(envio);

  for (let [name, value] of datosFormulario) {
    

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