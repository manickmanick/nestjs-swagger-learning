import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('Tag1') // Associate this controller with 'Tag1'
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('details')
  @ApiOperation({
    summary: 'Get cat details',
    description: 'Fetches details of a specific cat.',
  })
  findDetails(): string {
    return 'This action returns details of a cat';
  }
}
