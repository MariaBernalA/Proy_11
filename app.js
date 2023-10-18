const colors = require('colors');

const {mostrarMenu, pausa} = require('./proy_modules/menu');

const main = async() => {
    console.clear();
    console.log(`::::::::::::::::::::::::::::::::::::`.bgBlue);
    console.log(`:        Menu Principal          :`.bgBlue);
    console.log(`::::::::::::::::::::::::::::::::::::\n`.bgBlue);

    let option = '';

    do {
        do {
            option = await mostrarMenu();
    }while (!(option >=0 && option<=6))

    if (option !== '0'){
        console.log(`\nSe ejecuta el proceso ${option}`);
        await pausa();
    }
  } while(option !== '0');

};  


 main()