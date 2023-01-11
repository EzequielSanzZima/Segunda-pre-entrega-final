import ContenedorFirebase from "../../managers/FirebaseProductManager.js"

class ProductosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('productos')
    }
}

export default ProductosDaoFirebase
