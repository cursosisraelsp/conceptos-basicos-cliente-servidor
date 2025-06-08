// CREAMOS REFERENCIAS
export const refIconosEditarBorrarGardar = ()=>{
    const refBorrar = document.querySelector("[name='eliminar']");
    const refEditar = document.querySelector("[name='editar']")
    const refGuardar = document.querySelector("[name='guardar']")

    return {
        refBorrar,
        refEditar,
        refGuardar
    }
}