import {
  Injectable,
  ValidationPipe as NestValidationPipe,
} from "@nestjs/common";
/* import { ValidationError } from "class-validator";
import { ValidationException } from ".."; */

@Injectable()
export class ValidationPipe extends NestValidationPipe {
  constructor() {
    super({
      whitelist: true,
      transform: true,
      disableErrorMessages: false,
    });
  }
  /* formatErrors(list: ValidationError[]) {
    return list.reduce((acc: any, curr) => {
      const { property, constraints, children } = curr;
      if (children?.length) {
        acc[property] = this.formatErrors(children);
        return acc;
      }
      const rule = Object.keys(constraints)[0];
      const message = constraints[rule];
      acc[property] = message;
      return acc;
    }, {});
  }

  exceptionFactory = (errors: ValidationError[]) => {
    const formattedErrors = this.formatErrors(
      errors.filter((e) => e instanceof ValidationError)
    );
    return new ValidationException(formattedErrors);
  }; */
}
