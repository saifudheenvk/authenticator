import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isStrongPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (typeof value !== 'string') return false;

          // Regex: At least 1 letter, 1 number, 1 special character, and min 8 chars
          const strongPasswordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
          return strongPasswordRegex.test(value);
        },
        defaultMessage() {
          return 'Password must be at least 8 characters long, contain at least one letter, one number, and one special character.';
        },
      },
    });
  };
}
