import { Body, Controller, Post } from '@nestjs/common';
import { SignInInputDto } from './dtos/auth';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dtos/create.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


    @Post('signup')
    async signup(@Body() body: CreateUserDto) {
        return await this.authService.signup(body)   
    }

    @Post('signin')
    async signin(@Body() body: SignInInputDto) {
        return await this.authService.signin(body)

    }
}
