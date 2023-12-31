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
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { Request } from 'express';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { ValidationPipe } from 'src/pipe/c-validation.pipe';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { ConfigService } from '@nestjs/config';

@Controller('home')
@UseInterceptors(LoggingInterceptor)
export class HomeController {
  constructor(
    private readonly homeService: HomeService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Body(new ValidationPipe()) createHomeDto: CreateHomeDto) {
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
    const dbUser = this.configService.get<string>('DATABASE_USER');
    console.log(
      '🚀 ~ file: home.controller.ts:50 ~ HomeController ~ findAll ~ dbUser:',
      dbUser,
    );
    return this.homeService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.homeService.findOne(id);
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
