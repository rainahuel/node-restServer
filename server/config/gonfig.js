// puerto
process.env.PORT = process.env.PORT || 3000;


// entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// vencimiento del token /60 segundos/60 minutos/24 horas/ 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// semilla(seed) de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


// base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// mongodb://localhost:27017/cafe
// mongodb+srv://wolverine:<password>@cluster0-44zzn.mongodb.net/test

// google client id
process.env.CLIENT_ID = process.env.CLIENT_ID || '287011520782-d2oklb0m9ig9a17vu994elf7tjqheo7t.apps.googleusercontent.com';