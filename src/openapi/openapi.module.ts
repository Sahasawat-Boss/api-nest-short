import { Module } from '@nestjs/common';
import { OpenapiController } from './openapi.controller';
import { OpenapiService } from './openapi.service';

@Module({
  controllers: [OpenapiController],
  providers: [OpenapiService]
})
export class OpenapiModule {}
