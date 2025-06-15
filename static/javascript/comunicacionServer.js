export class comunicacionServer{

    async peticionGetConToken(){
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
    }

    async peticionPostFormulario(){
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

            return resposta
    }
}