/**
 * PUERTO
*/
process.env.PORT = process.env.PORT || 3000


/**
 * ENTORNO
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/**
 * base de datos
*/

let urlDB

if(process.env.NODE_ENV === 'dev'){
    urlDB= 'mongodb://localhost:27017/cafe'; 
}else{
    urlDB = process.env.mongoUri;
}

process.env.URLDB = urlDB




