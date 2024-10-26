import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
