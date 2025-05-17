import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get<string>('facebook_app_id')!,
      clientSecret: configService.get<string>('facebook_app_secret')!,
      callbackURL: configService.get<string>('facebookcallbackURL')!,
      profileFields: ['id', 'emails', 'name', 'photos'],
      scope: ['email'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any): any {
    return profile;
  }
}
