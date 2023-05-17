import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

const AUTH_HEADER = 'authorization';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly apiKey: string;

  constructor(config: ConfigService) {
    this.apiKey = config.get('API_GABSTER_V2_API_KEY');
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validate(request);
  }

  private validate(request: any) {
    const authHeader = request.headers[AUTH_HEADER];
    return authHeader === `ApiKey ${this.apiKey}`;
  }
}
