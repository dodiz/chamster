import {
  buildMessage,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function ContainsUpperLetter(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'ContainsUpperLetter',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate: (value: string) => {
          const regex = /[A-Z]/g;
          return regex.test(value);
        },
        defaultMessage: buildMessage(
          () => '$property must contain an upper letter',
          validationOptions
        ),
      },
    });
  };
}
