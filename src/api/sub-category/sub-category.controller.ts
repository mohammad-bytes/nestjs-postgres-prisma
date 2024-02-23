import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('sub-category')
@ApiTags('Sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}
}
