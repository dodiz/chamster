import { Module } from "@nestjs/common";
import { APP_FILTER, APP_PIPE } from "@nestjs/core";
import {
  GenericExceptionFilter,
  GenericValidationPipe,
  HttpExceptionFilter,
  ValidationExceptionFilter,
} from ".";

/**
 * @Module
 * By importing this into your root module you will globally enable:
 * - Exception layer for ValidationException, HttpExceptions and Generic Errors
 * - Validation pipe
 */
@Module({
  providers: [
    /* {
      provide: APP_FILTER,
      useClass: GenericExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: GenericValidationPipe,
    }, */
  ],
})
export class CoreModule {}
