import { Controller, Get, NotFoundError } from 'routing-controllers'
import Product from './entity'

@Controller()
export default class ProductController {

    //FIRST EXAMPLE OF BASIC PRODUCTCONTROLLER
    // @Get("/products")
    // main() {
    //     return {
    //         hello:'we sell tasty crickets'
    //     }
    // }

    // @Authorized()
    @Get('/products')
    async allProducts() {
        const products = await Product.find()
        if (!products) throw new NotFoundError('There are no products to display')
        return { products }
    }



}