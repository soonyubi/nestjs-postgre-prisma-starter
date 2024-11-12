import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import './opentelemetry-setup'; // OpenTelemetry 초기화
import logger from './common/logger/winston-logger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('API 문서')
    .setDescription('NestJS API')
    .setVersion('1.0')
    .addBearerAuth() // 인증 추가하고 싶을 때
    .build();

  const document = SwaggerModule.createDocument(app, config);
  app.useLogger(logger);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
