import { Module } from '@nestjs/common';
import { FacebookAuthController } from './facebookAuth.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  controllers: [FacebookAuthController],
  providers: [FacebookStrategy],
})
export class FacebookAuthModule {}
