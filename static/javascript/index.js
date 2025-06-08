import { eventos } from "./eventos.js"
import { refElementosPaxinaApp } from "./referenciasPaxinaApp.js"

async function peticionHtmlApp(){
    let token = localStorage.getItem("token")
                console.log("entro ... token? ",token)
                const peticion = await fetch("/paxina-app",{
                    method:"GET",
                    headers:{
                        "Authorization": token
                    }
                })
                const paxinaText = await peticion.text()
                console.log("paxina ?",paxinaText)
                document.body.innerHTML = paxinaText;
                

                    eventos(refElementosPaxinaApp())
                sair.addEventListener("click",()=>{
                        console.log("sair")
                        localStorage.removeItem("token");
                        location.replace("/");
                    })
}
async function acceso() {
    botonEnviar.addEventListener("click",async (e)=>{
            e.preventDefault();
            //const {nome, email} = formulario;// desesctructura o obxeto de entrada
            //console.log(nome.value, email.value);// imprime os valores do formulario

            let datosFormulario = new FormData(formulario);
            let entradas = Object.fromEntries(datosFormulario.entries());
            
            console.log(JSON.stringify(entradas))
            
            let obxetoEnvio = {
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(entradas)
            }
            let respostaServer = await fetch("/acceso", obxetoEnvio) 

            let resposta = await respostaServer.json();

            console.log("resposta ????",resposta.tokenUsuario);

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