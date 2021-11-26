import {
    Controller,
    Delete,
    Put,
    Get,
    Param,
    Post,
    Body,
    Redirect,
    HttpCode,
    Header,
    HttpStatus,
} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductsService} from "./products.service";
import {Product} from "./schemas/products.schema";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {
    }

    // @Get()
    // // @Redirect('https://google.com/', 301)
    // getAll(@Req() req: Request, @Res() res: Response): string{
    //     res.status(201).end('Poke')
    //     return 'getAll'
    // }

    @Get()
    getAll(): Promise<Product[]>{
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id:string): Promise<Product>{
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {

        return this.productsService.create(createProductDto)
    }

    @Delete(':id')
    delete(@Param('id')id:string): Promise<Product>{
        return this.productsService.remove(id)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id:string): Promise<Product>{
        return this.productsService.update(id, updateProductDto)
    }

}