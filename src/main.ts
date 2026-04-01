import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Importante: escuchar en el puerto que Coolify espera (por defecto 3000)
  await app.listen(3000);
}
bootstrap();
