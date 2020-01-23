import {IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, MaxLength, Min, MinLength, IsEmail} from 'class-validator';

export class UserUpdateDto {

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    id: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    @IsEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    username: string;

    @IsEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    icNumber: string;

    @IsNotEmpty()
    @IsEmail()
    @MinLength(3)
    @MaxLength(20)
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(6)
    @MaxLength(15)
    phone: string;

}