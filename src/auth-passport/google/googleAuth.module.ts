import { Module } from '@nestjs/common';
import { GoogleAuthController } from './googleAuth.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  controllers: [GoogleAuthController],
  providers: [GoogleStrategy],
})
export class GoogleAuthModule {}
