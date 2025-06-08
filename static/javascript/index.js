import { comunicacion } from "./comunicacionServer.js"
import { insertoLista } from "./insertarLista.js"


async function peticionHtmlApp(){

                await comunicacion.peticionGetConToken()
                insertoLista()

                sair.addEventListener("click",()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}
async function acceso() {
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
if(location.pathname == "/app"){
    peticionHtmlApp()
}
if(location.pathname == "/"){
    acceso()
}