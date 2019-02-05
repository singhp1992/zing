import { Controller, Get, NotFoundError, Post, HttpCode, Body, Patch, Param, Delete, Authorized } from 'routing-controllers'
import Product from './entity'

@Controller()
export default class ProductController {

    @Authorized()
    @Get('/products')
    async allProducts() {
        const products = await Product.find()
        if (!products) throw new NotFoundError('Oh no....There are no products')
        return { products }
    }

    //creates a new product
    @Post('/products')
    @HttpCode(201)
    async createProduct(
        @Body() product: Product
    ) {
        const entity = await product.save()

        return entity
    }

    //modify product by id
    @Patch('/products/:id([0-9]+)')
    async updateProduct(
        @Param('id') id: number,
        @Body() update
    ) {
        const product = await Product.findOne(id)

        if (!product) throw new NotFoundError(`Product not found :/`)

        const updatedProduct = Product.merge(product, update)

        const entity = await updatedProduct.save()
        return entity
    }

    //delete product by id
    @Delete('/products/:id')
    async deleteProduct(
        @Param('id') id: number
    ) {
        const product = await Product.findOne(id)

        if (!product) throw new NotFoundError(`Product not found`)

        Product.remove(product)
        return 'Product was deleted!'
    }



}