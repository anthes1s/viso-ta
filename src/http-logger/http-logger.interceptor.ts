import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpLoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const start = Date.now();

    console.log(
      `Request - ${this.formatTime(new Date())} - ${req.method} ${req.url}`,
    );

    return next.handle().pipe(
      tap(() => {
        console.log(`Response - ${res.statusCode} ${Date.now() - start}ms`);
      }),
    );
  }

  private formatTime(date: Date) {
    return `
    ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}
    `;
  }
}
