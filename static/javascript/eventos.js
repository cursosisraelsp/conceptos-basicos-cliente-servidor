import { borrarElemento, editarContidos } from "./Funcions/helpers.js"

export const eventosIconos = (icono)=>{
 

  icono.eliminar.addEventListener("click",(e)=>{
    console.log("estoy en icono eliminar",e.target.parentElement.childNodes)
    borrarElemento(e.target.parentElement)
  })
  icono.guardar.addEventListener("click",(e)=>{
    console.log("estoy en icono guardar",e.target)
     editarContidos(e.target.parentElement.childNodes,false)
  })

  icono.editar.addEventListener("click",(e)=>{
    
     editarContidos(e.target.parentElement.childNodes,true)
  })
}

