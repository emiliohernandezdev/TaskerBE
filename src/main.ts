import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(compression());
  await app.enableCors();
  await app.listen(3000);
}
bootstrap();
