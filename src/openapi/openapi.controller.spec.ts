import { Test, TestingModule } from '@nestjs/testing';
import { OpenapiController } from './openapi.controller';

describe('OpenapiController', () => {
  let controller: OpenapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenapiController],
    }).compile();

    controller = module.get<OpenapiController>(OpenapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
