import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { IHttpErrorResponse } from "@chamster/models";

@Catch()
export class GenericExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Error, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const errorPayload: IHttpErrorResponse = {
      type: exception.name,
      status: 500,
      error: exception.message,
    };

    httpAdapter.reply(ctx.getResponse(), errorPayload, errorPayload.status);
  }
}
