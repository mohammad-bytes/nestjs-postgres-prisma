import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('sub-category')
@ApiTags('Sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Post()
  create(@Body() createSubCategoryDto: any) {
    return this.subCategoryService.create(createSubCategoryDto);
  }

  @Get()
  findAll() {
    return this.subCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubCategoryDto: any) {
    return this.subCategoryService.update(+id, updateSubCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategoryService.remove(+id);
  }
}
