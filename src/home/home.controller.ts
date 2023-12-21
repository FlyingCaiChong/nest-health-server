import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { Request } from 'express';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post()
  create(@Body() createHomeDto: CreateHomeDto) {
    console.log(
      '🚀 ~ file: home.controller.ts:20 ~ HomeController ~ create ~ createHomeDto:',
      createHomeDto,
    );
    return this.homeService.create(createHomeDto);
  }

  @Get()
  findAll(@Query() query: Request) {
    console.log(
      '🚀 ~ file: home.controller.ts:30 ~ HomeController ~ findAll ~ request:',
      query,
    );
    return this.homeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeDto: UpdateHomeDto) {
    return this.homeService.update(+id, updateHomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeService.remove(+id);
  }

  // 测试异常
  @Put('exception')
  @UseFilters(new HttpExceptionFilter())
  async findException() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
