import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const JWT_SECRET = 'cuong123';

@Injectable()
export class AuthService {
  login(user: { username: string; password: string }) {
    if (user.username === 'admin' && user.password === '123456') {
      const payload = { user: user.username, role: 'admin' };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
      return { access_token: token };
    } else if (user.username === 'user' && user.password === '123456') {
      const payload = { username: user.username, role: 'user' };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
      return { access_token: token };
    }
    throw new UnauthorizedException('username or password is wrong');
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
