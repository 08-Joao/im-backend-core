import { Injectable } from '@nestjs/common';
import { SignInInputDto } from './dtos/auth';
import { CreateUserDto } from 'src/user/dtos/create.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    async signup(data: CreateUserDto) {
        const user = await this.userService.findByEmail(data.email);

        return 'signup'
    }

    async signin(data: SignInInputDto){
        return 'signin'
    }
}
