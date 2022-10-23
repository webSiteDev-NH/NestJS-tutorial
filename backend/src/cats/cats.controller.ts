import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';

import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

// Postman で実行確認
@Controller('cats')
export class CatsController {
  // serviceクラスのインスタンス作成
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    const name: string = createCatDto.name;
    const age: number = createCatDto.age;
    const breed: string = createCatDto.breed;
    return `This action adds a new cat name：${name} age：${age} breed：${breed}`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Query：クエリストリングから取得
  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   console.log(query);
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
