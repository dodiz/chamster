import {
  buildMessage,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

export function ContainsLowerLetter(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'ContainsLowerLetter',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate: (value: string) => {
          const regex = /[a-z]/g;
          return regex.test(value);
        },
        defaultMessage: buildMessage(
          () => '$property must contain lower letter',
          validationOptions
        ),
      },
    });
  };
}
