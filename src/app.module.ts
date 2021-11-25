import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ProductModule } from './Product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }