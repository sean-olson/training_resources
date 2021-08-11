"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_data_1 = require("./product-data");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.pItems = product_data_1.PRODUCT_ITEMS;
        // getProductsFromService(): Product[] {
        //   return [{
        //   id: 1,
        //   name: 'Scissors',
        //   description: 'use this to cut stuff',
        //   price: 4.99
        // }, {
        //   id: 2,
        //   name: 'Steak Knives',
        //   description: 'use this to eat food with',
        //   price: 10.99
        // }, {
        //   id: 3,
        //   name: 'Shot Glass',
        //   description: 'use this to take shots',
        //   price: 5.99
        // }]
        // }
    }
    ProductService.prototype.getProductsFromData = function () {
        console.log(this.pItems);
        return this.pItems;
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map