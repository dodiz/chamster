import {
  buildMessage,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function ContainsSpecialCharacter(
  validationOptions?: ValidationOptions
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'ContainsSpecialCharacter',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate: (value: string) => {
          const regex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/g;
          return regex.test(value);
        },
        defaultMessage: buildMessage(
          () => '$property must contain a special character',
          validationOptions
        ),
      },
    });
  };
}
