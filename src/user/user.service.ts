import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './domain/repositories/user.repository';
import { CreateUserDto } from './dtos/create.dto';
import { hashPassword } from 'src/utils/bcrypt.util';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc)
dayjs.extend(timezone)

@Injectable()
export class UserService {
    
    constructor(private userRepository: UserRepository) { }

    async findById(id: string) {
        return await this.userRepository.findById(id);
    }
    
    async findByEmail(email: string) {
        return await this.userRepository.findByEmail(email);
    }

    async create(data: CreateUserDto) {
        const existingUser = await this.userRepository.findByEmail(data.email);
        if (existingUser) {
            throw new UnauthorizedException('User with this email already exists');
        }
        
        const encryptedPassword = await hashPassword(data.password);
        data.password = encryptedPassword;
        
        // Formatando a data de nascimento para o formato Date
        data.birthDate = dayjs(data.birthDate, process.env.DATE_TIMEZONE).toDate();

        return await this.userRepository.create(data);
    }
}
