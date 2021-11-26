import {Controller, Delete, Put, Get, Param, Post, Body, Redirect} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {

    @Get()
    @Redirect('https://google.com/', 301)
    getAll(){
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param('id') id:string): string{
        return 'getOne ' + id
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
    }

    @Delete(':id')
    delete(@Param('id')id:string){
        return 'This is object was deleted ' + id
    }

    @Put(':id')
    update(@Body('title') updateProductDto: UpdateProductDto, @Param('id') id:string){
        return 'This is object was updated ' + id
    }

}