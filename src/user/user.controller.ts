import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    async findById(@Param() id: string) {
        return await this.userService.findById(id);
    }

    @Post('findByEmail')
    async findByEmail(@Body() body: { email: string} ) {
        return await this.userService.findByEmail(body.email);
    }

    @Post('create')
    async create(@Body() body: CreateUserDto) {
        return await this.userService.create(body);
    }

}
