class Auto{
    constructor(propietario, patente, hora){
        this.propietario = propietario
        this.patente = patente
        this.hora = hora
    }
}

let autos = []
const capacidad = 10
let autosIngresados = 0
let opcion = 0

function ingresarAutos(){
    if(autosIngresados>capacidad-1){
        alert('NO HAY LUGAR DISPONIBLE')
    }else{
        let nombre = ingresoNombre()
        let placa = verificoPatente()
        let ingreso = new Date()
        ingreso.toLocaleDateString()
        if(existePatente(placa)){
            alert('No pueden haber dos patentes iguales')
        }else{
            autos.push(new Auto(nombre,placa,ingreso))
            autosIngresados = autosIngresados + 1
        }
    }
}

function retirarAutoPorPatente(){
    let placa = verificoPatente()
    let existe= autos.findIndex(Auto=>Auto.patente === placa)
    if(existe != -1){
        alert('¡Su auto fue retirado con éxito!')
        autos.splice(existe,1)
    }else{
        alert('El vehiculo con patente: '+placa+' nunca fue ingresado o ya ha sido retirado')
    }
}

function verAutosEstacionados(){
    for (const auto of autos) {
        console.table(auto)
    }
}

function existePatente(p) {
    const resultado = autos.some(auto => auto.patente === p)
    return resultado
}

function verificoPatente(){
    let letras = /^[a-zA-Z]+$/;
    let numeros = /^[0-9]+$/;
    let p
    do{
        p = prompt('Ingrese la patente del vehiculo: ')
        if(p.substring(0,3).match(letras) && p.substring(3).match(numeros)){
            return p
        }else{
            alert('Recuerda que la patente debe tener el siguiente formato: XXX123')
        }
    }while(p.length!==6 || !(p.substring(0,3).match(letras) && p.substring(3).match(numeros)))
}

function ingresoNombre(){
    let n
    let letras = /^[a-zA-Z]+$/;
    do{
        n = prompt('Ingrese su nombre: ')
        if(n.match(letras) && n !== null){
            return n
        }else{
            alert('Ingrese un nombre correcto')
        }
    }while(n!==null && !(n.match(letras)))
}

do{
    opcion = parseInt(prompt('Ingrese una opcion:\n[1- Ingresar vehiculo]\n[2- Retirar vehiculo]\n[3- Listar vehiculos ingresados]\n[4- Salir]'))
    switch(opcion){
        case 1:
            ingresarAutos()
            break;
        case 2:
            retirarAutoPorPatente()
            break;
        case 3:
            verAutosEstacionados()
            break;
        case 4:
            alert('Hasta luego, regrese pronto')
            break;
        default:
            alert('Ingrese una opcion válida')
    }
}while(opcion != 4)