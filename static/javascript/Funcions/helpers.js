import { comunicacion } from "../comunicacionServer.js"
import { insertoLista } from "../insertarLista.js"

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
            selector.contentEditable = true;
            selector.className = "edito";
        }else if(selector.className == "edito"){        
            selector.contentEditable = false
            selector.className ="datos"
        }
    }
}
export const borrarElemento = (referencia) =>{
    referencia.remove()
}
export async function peticionHtmlApp(){

                await comunicacion.peticionGetConToken()
                insertoLista()

                sair.addEventListener("click",()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}
export async function acceso() {
    botonEnviar.addEventListener("click",async (e)=>{
            e.preventDefault();

            let resposta = await comunicacion.peticionPostFormulario()

            if(resposta.resposta === "acesso autorizado"){
                console.log("iremos a app")
                localStorage.setItem("token",resposta.tokenUsuario)
                location.replace("/app");
            }else{
                console.log(resposta.resposta);
                mensagem.innerHTML = resposta.resposta;
            }
        })
}