import { Injectable } from "@nestjs/common";

import {
    Product,
    Prisma,
} from '@prisma/client'
import { PrismaService } from "src/prisma.service";

let prisma: PrismaService;


@Injectable()
export class ProductService {
    constructor() {
        prisma = new PrismaService
    }

    async create(product: Prisma.ProductCreateInput): Promise<Product | null> {

        let result = await prisma.product.create({ data: product });
        return result;
    }

    async getAll(): Promise<Product[] | null> {
        let products = await prisma.product.findMany();
        return products;
    }

    async get(id : number): Promise<Product | null> {        

        let product = await prisma.product.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })

        return product;
    }

    async update(product: Product): Promise<any> {
        let result = await prisma.product.update({
            data: product,
            where: {
                id: product.id
            }
        })

        return result;
    }


    async delete(id: number): Promise<void>  {
        
        await prisma.product.delete({
            where: {
                id: id
            }
        })
    }
}