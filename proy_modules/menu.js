const mostrarMenu =  () => {

    return new Promise( resolve => {
        //console.clear();
        console.log(`:::::::::::::::::::::::::`.bgBlue);
        console.log(`::Seleccione una Opcion::`.bgBlue);
        console.log(`:::::::::::::::::::::::::\n`.bgBlue);
        console.log(`${'1.'.bgBlue} Crear nuevo producto`);
        console.log(`${'2.'.bgBlue} Listar Producto`);
        console.log(`${'3.'.bgBlue} Listar Clientes`);
        console.log(`${'4.'.bgBlue} Listar Pedidos`);
        console.log(`${'5.'.bgBlue} Enviar Pedidos`);
        console.log(`${'6.'.bgBlue} Borrar Pedidos`);
        console.log(`${'0.'.bgBlue} Salir\n`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una Opcion : ', (opt) => {
            readLine.close();
            resolve(opt);
        })
       
    })
};


const pausa = () => {
    return new Promise(resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) =>{
            readLine.close();
            resolve();
        })
    })
};

module.exports = {
    mostrarMenu,
    pausa
}