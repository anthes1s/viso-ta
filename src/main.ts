import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpLoggerInterceptor } from './http-logger/http-logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new HttpLoggerInterceptor());
  await app.listen(process.env.PORT ?? 10000);
}
bootstrap();
