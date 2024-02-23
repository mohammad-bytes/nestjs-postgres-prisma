import { Module } from '@nestjs/common';
import { CategoryModule } from './api/category/category.module';
import { SubCategoryModule } from './api/sub-category/sub-category.module';
@Module({
  imports: [CategoryModule,SubCategoryModule]
})
export class AppModule {}
