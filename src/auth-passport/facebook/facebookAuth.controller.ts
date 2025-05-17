import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth/facebook')
export class FacebookAuthController {
  @Get()
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth() {}

  @Get('callback')
  @UseGuards(AuthGuard('facebook'))
  callback(@Req() req: Request) {
    console.log(req);
  }
}
