const paxinas = {
    app:`estou dentro da app
    <main>
    <button id="sair">Sair</button>
    <h1>Inserto lista</h1>
    <form id="envio" enctype="multipart/form-data">
      <label for="nome"> Nome : </label>
      <input id="nome" name="Nome" type="text" placeholder="Introduce nome " />

      <label for="apelido1"> Primer apelido : </label>
      <input
        id="apelido1"
        name="Apelido1"
        type="text"
        placeholder="Introduce o teu primer apelido "
      />

      <label for="apelido2">Segundo apelido :</label>
      <input
        id="apelido2"
        name="Apelido2"
        type="text"
        placeholder="Introduce o segundo apelido "
      />

      <label for="idade">Idade:</label>
      <input
        id="idade"
        name="Idade"
        type="text"
        placeholder="Introduce an túa idade "
      />
      <label for="traballo">Traballo :</label>
      <input
        id="traballo"
        name="Traballo"
        type="text"
        placeholder="Introduce a qué te dedicas "
      />

      <label for="avatar">Avatar :</label>
      <input id="avatar" name="Avatar" type="file" />
      <button type="submit">Insertar</button>
      <button type="reset">Borrar datos</button>
    </form>
    <!--<img name="icono-eliminar" class="iconos" src="./imaxes/iconos/eliminar-50.png" />
    <img name="icono-editar" class="iconos" src="./imaxes/iconos/editar.png" />
    <img name="icono-guardar" class="iconos" src="./imaxes/iconos/guardar-50.png" />-->
    </main>
    `
}

module.exports = paxinas