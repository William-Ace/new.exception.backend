import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Exception example')
    .setDescription('The exception API description')
    .setVersion('1.0')
    .addTag('exception')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('calendar', app, document);
  await app.listen(1934);
}
bootstrap();
