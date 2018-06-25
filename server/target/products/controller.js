"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let ProductController = class ProductController {
    async allProducts() {
        const products = await entity_1.default.find();
        if (!products)
            throw new routing_controllers_1.NotFoundError('There are no products to display');
        return { products };
    }
    async createProduct(product) {
        const entity = await product.save();
        return entity;
    }
    async updateProduct(id, update) {
        const product = await entity_1.default.findOne(id);
        if (!product)
            throw new routing_controllers_1.NotFoundError(`Product not found`);
        const updatedProduct = entity_1.default.merge(product, update);
        const entity = await updatedProduct.save();
        return entity;
    }
};
__decorate([
    routing_controllers_1.Get('/products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "allProducts", null);
__decorate([
    routing_controllers_1.Post('/products'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    routing_controllers_1.Patch('/products/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
ProductController = __decorate([
    routing_controllers_1.Controller()
], ProductController);
exports.default = ProductController;
//# sourceMappingURL=controller.js.map