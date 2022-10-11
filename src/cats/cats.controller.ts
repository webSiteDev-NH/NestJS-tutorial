import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  // GET /cats で findAll が動作
  @Get()
  findAll(): string {
    return 'All cats';
  }

  // POST /cats で create が動作
  @Post()
  create(): string {
    return 'New cat';
  }

  // GET /cats/mine で myCat が動作
  @Get('mine')
  myCat(): string {
    return 'My cat';
  }
}
