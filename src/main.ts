import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //PARA USAR VALIDACIONES EN LOS DTO
  app.useGlobalPipes(new ValidationPipe());
  //PARA USAR SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors();
  //validar el puerto que dominio puede acceder por cors
  //app.enableCors({origin: 'http://localhost:3000'});

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
