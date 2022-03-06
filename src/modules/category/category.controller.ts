import { Controller, Post } from "@nestjs/common";

@Controller('category')
export class CategoryController{
    @Post('create')
    createCategory(){
        
    }
}