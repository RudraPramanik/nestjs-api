import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//postreq /auth/singup
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'I am signed up'
  }

  @Post('signin')
  signin() {
    return 'i am signed in'
  }
}
