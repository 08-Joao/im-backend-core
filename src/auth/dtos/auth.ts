import { IsDateString, IsEmail, IsEnum, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class SignInInputDto {
    @IsEmail()
    readonly email!: string;

    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password!: string;

}


export class LoginOutputDto { 
    readonly accessToken!: string;
}