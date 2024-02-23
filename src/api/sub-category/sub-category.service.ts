import { Injectable } from '@nestjs/common';

@Injectable()
export class SubCategoryService {
  create(createSubCategoryDto: any) {
    return 'This action adds a new subCategory';
  }

  findAll() {
    return `This action returns all subCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subCategory`;
  }

  update(id: number, updateSubCategoryDto: any) {
    return `This action updates a #${id} subCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCategory`;
  }
}
