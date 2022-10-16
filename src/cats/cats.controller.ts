import { Controller, Get, Post, Param, Req, Redirect } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  // GET /cats で findAll が動作
  @Get()
  findAll(): string {
    return 'All cats';
  }

  // GET /cats/:id で cat が動作
  // 別記述法：cat(@Param('id') id): string {
  // @Get(':id')
  // cat(@Param('id') id): string {
  //   return `cat ${id}`;
  // }

  // @Req() /cats/req/:id で getReq が動作
  @Get('req/:id')
  getReq(@Req() request: Request): string {
    console.log(request);
    return `success request id ${request.params.id}`;
  }

  // GET /cats/mine で myCat が動作
  @Get('mine')
  myCat(): string {
    return 'path /mine My cat';
  }

  @Get('redirect')
  // リダイレクト先
  @Redirect('mine')
  redirect() {
    console.log('redirect');
  }

  // POST /cats で create が動作
  @Post()
  create(): string {
    return 'New cat';
  }
}
