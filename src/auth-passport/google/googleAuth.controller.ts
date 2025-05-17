import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth/google')
export class GoogleAuthController {
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  callback(@Req() req: Request) {
    console.log(req.user);
  }
}
