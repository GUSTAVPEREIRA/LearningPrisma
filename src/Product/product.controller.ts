import { PrismaClient, Product } from ".prisma/client";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";

const prisma = new PrismaClient();

@Controller('product')
export class ProductController {


    constructor(private productService: ProductService) {

    }

    @Get()
    async getAll(): Promise<Product[] | null> {

        return await this.productService.getAll();         
    }

    @Get(':id')
    async getProduct(@Param('id', ParseIntPipe) id : number): Promise<Product | null> {

        return await this.productService.get(id);
    }

    @Post('create')
    async createProduct(@Body() product: Product): Promise<Product> {

        return await this.productService.create(product);
    }

    @Put('update')
    async updateProduct(@Body() product: Product): Promise<Product> {
        return await this.productService.update(product);        
    }

    @Delete(':id')
    async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<string | null> {

        await this.productService.delete(id);

        return `$Produto com id ${id} foi deletado!`
    }
}