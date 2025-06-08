export const imaxesEliminarGardarEditar = () =>{
    let obxetoImaxes = {
        eliminar:"./imaxes/iconos/eliminar-50.png",
        editar: "./imaxes/iconos/editar.png",
        guardar:"./imaxes/iconos/guardar-50.png"
    }
    let img = {}
   
    for (let icono in obxetoImaxes){
        
        img[`${icono}`] = document.createElement("img")
        img[`${icono}`].src = obxetoImaxes[`${icono}`]
        img[`${icono}`].name = icono;
    }

    
    return img
}

export const editarContidos = (arraySelectores,editar) => {
    for(let selector of arraySelectores){
        
        if(selector.hasAttribute("contenteditable") && editar === true){
            selector.contentEditable = true
            selector.className = "edito"
        }else if(selector.className == "edito"){
            
            selector.contentEditable = false
            selector.className ="datos"
        }
    }
}