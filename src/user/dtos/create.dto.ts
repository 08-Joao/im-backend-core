import { IsDateString, IsEnum, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { SignInInputDto } from "src/auth/dtos/auth";
import { Role } from "../enums/user.enum";

export class CreateUserDto extends SignInInputDto {
    @IsString()
    readonly name!: string;

    @IsPhoneNumber('BR')
    readonly phoneNumber!: string;
    
    @IsDateString()
    birthDate!: Date;

    @IsOptional()
    @IsEnum(Role)
    readonly role = 'USER' as Role;
}