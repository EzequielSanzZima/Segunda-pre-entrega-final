import express from 'express'
const { Router } = express


//------------------------------------------------------------------------
// instancio servidor

const app = express()

import { ManagerDaoCarts, ManagerDaoProducts } from "../src/daos/index.js";

const managerProductos = ManagerDaoProducts
import { Producto } from "./objs/Producto.js"; 

const managerCarrito = ManagerDaoCarts
import { Carrito } from "./objs/Carrito.js";


import { DateHelper } from "./helpers/DateHelper.js";
const dateHelper = new DateHelper()

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', async (req, res) => {
    const result = await managerProductos.getAll()
    if (typeof result == "string") {
        res.status(404).send('El archivo no existe')
    } else {
        res.json(result)
    }
})

productosRouter.get('/:id', async (req, res) => {
    console.log(req.params.id);
    res.json(await managerProductos.getById(req.params.id));
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    try {
        const product = new Producto(req.body.title, req.body.price, req.body.thumbnail)
        const result = await managerProductos.save(product);
        res.json(result);
    } catch (error) {
        return 'Faltan datos del producto'
    }
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    try {
        if (req.body.title == undefined || req.body.price == undefined || req.body.thumbnail == undefined) {
            throw 'Faltan datos del producto a actualizar'
        }
        else {
            const product = new Producto(req.body.title, req.body.price, req.body.thumbnail)
            const result = await managerProductos.updateProduct(product, req.body.id);
            res.json(result);
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    const result = await managerProductos.deleteById(req.params.id);
    res.json(result);
})

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()

carritosRouter.get('/:id/productos', async (req, res) => {
    const result = await managerCarrito.getAll(req.params.id)
    if (typeof result == "string") {
        res.status(404).send('El carrito no existe')
    } else {
        res.json(result)
    }
})

carritosRouter.post('/', async (req, res) => {
    try {  
        const carrito = new Carrito(dateHelper.getDate(), req.body.productsId == undefined ? [] : req.body.productsId)
        const result = await managerCarrito.save(carrito);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
})

carritosRouter.delete('/:id', async (req, res) => {
    const result = await managerProductos.deleteById(req.params.id);
    res.json(result);
})

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get('/:id/productos', async (req, res) => {
    const result = await managerCarrito.getAll(req.params.id)
    if (typeof result == "string") {
        res.status(404).send('El carrito no existe')
    } else {
        res.json(result)
    }
})

carritosRouter.post('/:id/productos', async (req, res) => {
    try {
        const result = await managerCarrito.updateById(req.body.productsId, req.params.id)
        res.json(result)
    } catch (error) {
         console.log(error);
    }
})

carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
    const result = await managerCarrito.deleteProductInCartById(req.params.id,req.params.id_prod);
    res.json(result);
})

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app