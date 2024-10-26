import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './common/prisma.service';
import { AccountModule } from './account/account.module';

@Module({
  imports: [AccountModule],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
