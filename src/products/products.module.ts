import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./schemas/products.schema";
import {ProductsService} from "./products.service";
import {ProductsController} from "./products.controller";

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([
            {name: Product.name, schema: ProductSchema}
        ])
    ]
})

export class ProductsModule {}