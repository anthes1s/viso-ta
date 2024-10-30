import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpLoggerInterceptor } from './http-logger/http-logger.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("viso-test-assignment")
    .setDescription("viso-ta API")
    .addTag("viso-ta")
    .build()
  const docFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, docFactory);
  app.enableCors();
  app.useGlobalInterceptors(new HttpLoggerInterceptor());
  await app.listen(process.env.PORT ?? 10000);
}
bootstrap();
