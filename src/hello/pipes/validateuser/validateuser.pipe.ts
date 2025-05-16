import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const anio = parseInt(value.age.toString(), 10);
    if (isNaN(anio)) {
      throw new HttpException("El año no es un número", HttpStatus.BAD_REQUEST);
    }
    return {...value, age: anio };
  }
}
