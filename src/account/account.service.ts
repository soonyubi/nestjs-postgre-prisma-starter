import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(data: Prisma.AccountCreateInput) {
    return await this.prisma.account.create({ data });
  }

  async getAccountById(id: number) {
    return await this.prisma.account.findUnique({ where: { id } });
  }

  async updateAccount(id: number, data: Prisma.AccountUpdateInput) {
    return await this.prisma.account.update({ where: { id }, data });
  }

  async deleteAccount(id: number) {
    return this.prisma.account.delete({ where: { id } });
  }

  async getAllAccounts() {
    return this.prisma.account.findMany();
  }
}
