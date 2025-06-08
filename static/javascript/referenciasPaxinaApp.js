// CREAMOS REFERENCIAS
export const refElementosPaxinaApp = () => {
                    const elementoInput = document.querySelector("input");
                    const idTextoPintado = document.querySelector("#textoPintado");
                    const idLeoParrafo = document.querySelector("#leo-parrafo");
                    const refImaxenEliminar = document.querySelector("[name='icono-eliminar']");
                    const refImaxenEditar = document.querySelector("[name='icono-editar']");
                    const refImaxenGuardar = document.querySelector("[name='icono-guardar']");
                    return {
                        elementoInput,
                        idTextoPintado,
                        idLeoParrafo,
                        refImaxenEliminar,
                        refImaxenEditar,
                        refImaxenGuardar
                    }
                }