import { Injectable } from '@nestjs/common';
import { SignInInputDto } from './dtos/auth';
import { CreateUserDto } from 'src/user/dtos/create.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    async signup(data: CreateUserDto) {
        return this.userService.create(data);
    }

    async signin(data: SignInInputDto){
        return 'signin'
    }
}
