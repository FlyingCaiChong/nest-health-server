import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';
import { LoggerMiddleware } from '../middleware/logger.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  exports: [TypeOrmModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(HomeController);
  }
}
