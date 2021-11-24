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

        let products = await this.productService.getAll();
        return products;
    }

    @Get(':id')
    async getProduct(@Param('id', ParseIntPipe) id : number): Promise<Product | null> {

        let product = await this.productService.get(id);

        return product;
    }

    @Post('create')
    async createProduct(@Body() product: Product): Promise<Product> {

        let result = await this.productService.create(product);

        return result;
    }

    @Put('update')
    async updateProduct(@Body() product: Product): Promise<Product> {
        await this.productService.update(product);
        return product;
    }

    @Delete(':id')
    async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<string | null> {

        await this.productService.delete(id);

        return `$Produto com id ${id} foi deletado!`
    }
}