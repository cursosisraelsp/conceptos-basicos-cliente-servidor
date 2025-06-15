import { acceso, peticionHtmlApp } from "./Funcions/helpers.js"

if(location.pathname == "/app"){
    peticionHtmlApp()
    
}
if(location.pathname == "/"){
    acceso()
  
}