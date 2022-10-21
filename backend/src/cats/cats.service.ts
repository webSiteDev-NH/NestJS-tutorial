import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  // Catオブジェクトの配列
  private readonly cats: Cat[] = [];

  // cats.controllerのcreateメソッドで引数にPOSTパラメーター
  create(cat: Cat) {
    console.log('exec new Cat create');
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    console.log('exec get all Cats');
    return this.cats;
  }
}
