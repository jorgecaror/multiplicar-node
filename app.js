const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.blue))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no reconocido');

}




//let base = 5;

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(argv.base);