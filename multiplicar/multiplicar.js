//required
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('===================='.red);
    console.log(`=====Tabla de ${base}=====`.green);
    console.log('===================='.red);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`el valor introducido ${limite} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }


        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green)

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}