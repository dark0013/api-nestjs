##comandos
nest g controller 
nest g service 
nest g guard <ruta|nombre> genera guard
nest g middleware <ruta|nombre> genera middleware
nest g resource <nombre> genera toda la estructura de archivo

##instalar swagger
npm install --save @nestjs/swagger
info: https://docs.nestjs.com/openapi/introduction

##PRISMA
npm install prisma --save-dev
npx prisma
npx prisma init
npx prisma migrate dev --name init
