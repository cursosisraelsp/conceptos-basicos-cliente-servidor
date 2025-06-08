export const eventos = (referciasElementos) => {
    console.log("referciasElementos ",referciasElementos)
    referciasElementos.elementoInput.addEventListener("input", (e) => {
            console.log("A entrada é: ", e.target.value);
            referciasElementos.idTextoPintado.innerHTML = e.target.value;
          });
    referciasElementos.idLeoParrafo.addEventListener("click", () => {
            console.log(referciasElementos.idTextoPintado.textContent);
          });
    referciasElementos.refImaxenEliminar.addEventListener("click", () => {
            console.log("clico dende a imaxen");
            //idTextoPintado.remove();// ELIMINA A REFERENCIA
            referciasElementos.idTextoPintado.textContent = "";
          });
          referciasElementos.refImaxenEditar.addEventListener("click", () => {
            referciasElementos.idTextoPintado.contentEditable = true;
            referciasElementos.idTextoPintado.className = "edita"
          });

          referciasElementos.refImaxenGuardar.addEventListener("click", () => {
            referciasElementos.idTextoPintado.contentEditable = false;
            referciasElementos.idTextoPintado.className = 'img[name="icono-guardar"]'
          });
}