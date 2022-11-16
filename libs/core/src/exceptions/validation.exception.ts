import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  errors: { [key: string]: string };
  constructor(errors: { [key: string]: string }) {
    super('Validation Error', HttpStatus.UNPROCESSABLE_ENTITY);
    this.errors = { ...errors };
  }
}
