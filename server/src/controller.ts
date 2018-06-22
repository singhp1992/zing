import { Controller, Get } from 'routing-controllers'

@Controller()
export default class MainController {

    @Get("/products")
    main() {
        return {
            hello:'we sell tasty crickets'
        }
    }

}