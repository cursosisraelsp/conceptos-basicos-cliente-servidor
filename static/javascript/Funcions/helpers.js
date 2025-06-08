export const pintarEliminarGardarEditar = () =>{
    let obxetoImaxes = {
        eliminar:"./imaxes/iconos/eliminar-50.png",
        editar: "./imaxes/iconos/editar.png",
        garda:"./imaxes/iconos/guardar-50.png"
    }
    let img = {}
   
    for (let icono in obxetoImaxes){
        
        img[`${icono}`] = document.createElement("img")
        img[`${icono}`].src = obxetoImaxes[`${icono}`]
       
    }

    console.log("img s ",img.editar,img.garda,img.eliminar)
    return img
}