// import { url } from "inspector";

// ==================================
//                 PORT
// ==================================

process.env.PORT = process.env.PORT || 3000;

// ==================================
//              Entorno
// ==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================================
//         Vencimiento del Token
// ==================================
// 60 segundo
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = '48h';


// ==================================
//      SEED de autentificación
// ==================================

process.env.SEED = process.env.SEED || 'Este-es-el-seed-desarrollo';

// ==================================
//          Base de datos
// ==================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ==================================
//         Google Client Id
// ==================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '575347749252-nkgc559fftfn23l3o4b1to7olv8ppgjn.apps.googleusercontent.com';