import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  // GET /cats で findAll が動作
  // @Get()
  // findAll(): string {
  //   return 'All cats';
  // }

  // GET /cats/:id で cat が動作
  // 別記述法：cat(@Param('id') id): string {
  @Get(':id')
  cat(@Param('id') id): string {
    return `cat ${id}`;
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
