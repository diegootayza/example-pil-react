class Product {
    constructor(data) {
        this.name = data && data.name ? data.name : ''
        this.stock = data && data.stock ? data.stock : ''
        this.image = data && data.image ? data.image : ''
    }
}

export default Product
