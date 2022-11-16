import {
  buildMessage,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function ContainsNumber(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'ContainsNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate: (value: string) => {
          const regex = /[0-9]/g;
          return regex.test(value);
        },
        defaultMessage: buildMessage(
          () => '$property must contain a number',
          validationOptions
        ),
      },
    });
  };
}
