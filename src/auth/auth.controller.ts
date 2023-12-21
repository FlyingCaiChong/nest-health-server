import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto) {
    console.log(
      '🚀 ~ file: auth.controller.ts:13 ~ AuthController ~ login ~ createAuthDto:',
      createAuthDto,
    );
    return this.authService.loginWithCredentials(createAuthDto);
  }
}
