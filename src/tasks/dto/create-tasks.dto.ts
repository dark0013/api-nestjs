import {IsString, IsNotEmpty  } from "class-validator";

export class CreateTasksDto {
    //se instala para realizar validaciones
    //npm i --save class-validator class-transformer
@IsNotEmpty()
    title: string;
    @IsString()
    description: string;  

}