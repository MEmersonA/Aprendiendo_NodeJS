
setTimeout(() => {
    console.log("Hola Mundo")
}, 1000);

const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre: "El pepe"
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);

}

getUsuarioByID(101, (usuario) => {

    console.log(usuario)
    console.log(usuario.nombre.toUpperCase())

})
