import {IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength, IsEmail} from 'class-validator';

export class UserCreateDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    username: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    icNumber: string;

    @IsEmail()
    @MinLength(3)
    @MaxLength(80)
    email?: string;

    @MinLength(0)
    @MaxLength(20)
    phone?: string;

}