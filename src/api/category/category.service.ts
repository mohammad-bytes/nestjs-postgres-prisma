import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/helper/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService
  ) { }

  /** create new category */
  async create(data: CreateCategoryDto) {
    try {
      const isExits = await this.prisma.category.findUnique({ where: { name: data.name.trim() } });
      if (isExits) {
        throw new HttpException('Category already exits.', HttpStatus.BAD_REQUEST);
      }
      const result = await this.prisma.category.create({
        data: {
          name: data.name.trim()
        }
      });
      return {
        statusCode: HttpStatus.CREATED,
        message: 'category has been created successfully',
        data: result
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /** get all category */
  async findAll() {
    try {
      const result = await this.prisma.category.findMany();
      return {
        statusCode: HttpStatus.CREATED,
        message: 'success',
        data: result
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

   /** get single category by id*/
  async findOneById(id: number) {
    try {
      const result = await this.prisma.category.findUnique({ where: { id } });
      if (!result) {
        throw new NotFoundException('Not found.');
      }
      return {
        statusCode: HttpStatus.CREATED,
        message: 'success',
        data: result
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /** update category*/
  async update(id: number, name: string) {
    try {
      const isExits = await this.prisma.category.findUnique({ where: { id } });
      if (!isExits) {
        throw new NotFoundException('Not found.');
      }
      await this.prisma.category.update({ where: { id }, data: { name } });
      return {
        statusCode: HttpStatus.CREATED,
        message: 'category updated successfully',
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
 /** delete category by id*/
  async remove(id: number) {
    try {
      const isExits = await this.prisma.category.findUnique({ where: { id } });
      if (!isExits) {
        throw new NotFoundException('Not found.');
      }
      await this.prisma.category.delete({ where: { id } });
      return {
        statusCode: HttpStatus.CREATED,
        message: 'category deleted successfully',
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
