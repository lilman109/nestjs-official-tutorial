import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // explanation: removes any properties that the dto is not expecting
    transform: true, // explanation: transforms the request body to the dto type;
    forbidNonWhitelisted: true // explanation: throws an error if any properties are not expected
  })); // explanation: add to use validation pipe (install class-validator and class-transformer)
  await app.listen(3000);
}
bootstrap();
