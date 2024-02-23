import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PaginationDto } from 'src/helper/pagination.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /** create new category */
  @Post('/new')
  async create(@Body() body: CreateCategoryDto) {
    return await this.categoryService.create(body);
  }

  /** get all category */
  @Get('/')
  findAll(@Query() query: PaginationDto) {
    return this.categoryService.findAll(query);
  }

  /** get single category by id*/
  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findOneById(+id);
  }

  /** update category*/
  @Patch('update/:id')
  update(@Param('id') id: number, @Body() body: CreateCategoryDto) {
    return this.categoryService.update(+id, body.name);
  }

  /** delete category by id*/
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryService.remove(+id);
  }
}
