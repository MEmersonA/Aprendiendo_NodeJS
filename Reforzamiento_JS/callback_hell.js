
const empleados = [

    {
        id:1,
        nombre: "Pepe"
    },
    {
        id:2,
        nombre: "Juaco"
    },
    {
        id:3,
        nombre: "Juaquín"
    }

]

const salarios = [

    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }

]

const getEmpleado = (id, callback) => {

    const empleado = empleados.find((e) => e.id === id)

    if(empleado){
        callback(null, empleado.nombre)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }

}

const getSalario = (id, callback) => {

    const salario = salarios.find((e) => e.id === id)

    if(salario){
        callback(null, salario.salario)        
    }else{
        callback(`Empleado con id ${id} no existe, no hay salario`)
    }

}

const id = 3

getEmpleado(id, (err, empleado) => {

    if(err){
        console.log("ERROR")
        return console.log(err)
    }

    getSalario(id, (err, salario) => {

        if(err){
            console.log("ERROR")
            return console.log(err)
        }
    
        console.log(`El ${empleado} existe, y su salario es de ${salario}`)
    
    })

})



