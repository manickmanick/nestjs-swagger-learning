import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('Tag1') // Associate this controller with 'Tag1'
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
