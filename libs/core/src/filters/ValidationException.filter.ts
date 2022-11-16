import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { IHttpErrorResponse } from "@chamster/models";
import { ValidationException } from "../exceptions";

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: ValidationException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const errorPayload: IHttpErrorResponse = {
      type: "ValidationError",
      status: exception.getStatus(),
      errors: exception.errors,
    };

    httpAdapter.reply(ctx.getResponse(), errorPayload, errorPayload.status);
  }
}
