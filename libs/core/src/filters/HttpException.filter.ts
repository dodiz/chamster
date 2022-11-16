import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { IHttpErrorResponse } from "@chamster/models";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const errorPayload: IHttpErrorResponse = {
      type: exception.name,
      status: exception.getStatus(),
      error: exception.message,
    };

    httpAdapter.reply(ctx.getResponse(), errorPayload, errorPayload.status);
  }
}
