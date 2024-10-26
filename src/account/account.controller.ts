import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() data: Prisma.AccountCreateInput) {
    return this.accountService.createAccount(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.getAccountById(Number(id));
  }

  @Get()
  findAll() {
    return this.accountService.getAllAccounts();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.AccountUpdateInput) {
    return this.accountService.updateAccount(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.deleteAccount(Number(id));
  }
}
