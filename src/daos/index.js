import admin from "firebase-admin"
import options from '../config.js'



let ManagerDaoCarts
let ManagerDaoProducts
let databaseType = "Firebase"

switch (databaseType) {
    case "mongoDB":
        const { default: MongoCartsDao } = await import("./carritos/CarritosDaoMongoDb.js")
        const { default: MongoProductsDao } = await import("./productos/ProductosDaoArchivo.js")
        ManagerDaoCarts = new MongoCartsDao(options.mongodb, 'carritos')
        ManagerDaoProducts = new MongoProductsDao(options.mongodb, 'productos')
        break;

    case "Firebase":
        const { default: FirebaseCartsDao } = await import("../daos/carritos/CarritosDaoFirebase.js")
        const { default: FirebaseProductsDao } = await import("../daos/productos/productosDaoFirebase.js")
        admin.initializeApp({
            credential: admin.credential.cert(options.firebase.key),
            databaseURL: options.firebase.dbUrl,
        });
        ManagerDaoCarts = new FirebaseCartsDao('carritos')
        ManagerDaoProducts = new FirebaseProductsDao('productos')
        break;

    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')

        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break

    case 'sqlite3':
        const { default: ProductosDaosqlite3 } = await import('./productos/mariaDb.js')
        const { default: CarritosDaosqlite3 } = await import('./carritos/MariaDb.js')

        productosDao = new ProductosDaosqlite3()
        carritosDao = new CarritosDaosqlite3()
        break
    default:
        break;
}


export { ManagerDaoCarts, ManagerDaoProducts }