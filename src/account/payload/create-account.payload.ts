import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateAccountDto {
  @ApiProperty({ example: 'user@example.com', description: '사용자 이메일' })
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: '사용자 이름',
    required: false,
    nullable: true,
  })
  name?: string | null;

  static toEntity(data: CreateAccountDto): Prisma.AccountCreateInput {
    return {
      email: data.email,
      name: data.name,
    };
  }
}
