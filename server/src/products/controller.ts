import { Controller, Get } from 'routing-controllers'

@Controller()
export default class ProductController {

    @Get("/products")
    main() {
        return {
            hello:'we sell tasty crickets'
        }
    }

}