// import { url } from "inspector";

// ==================================
//                 PORT
// ==================================

process.env.PORT = process.env.PORT || 3000;

// ==================================
//              Entorno
// ==================================

process.env.NODE_EVN = process.env.NODE_EVN || 'dev';

// ==================================
//          Base de datos
// ==================================

let urlDB;

if (process.env.NODE_EVN === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://joguMaster16:Sj2rQSliM7P4pFEC@cluster0-2yzbu.mongodb.net/cafe'
}

process.env.URLDB = urlDB;