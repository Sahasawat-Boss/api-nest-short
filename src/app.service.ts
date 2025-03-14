import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API-Nest-Short Server is Running...!';
  }
}

//HTTP GET/ --> controller -->service