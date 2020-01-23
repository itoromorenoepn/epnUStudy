import {IsNotEmpty, IsNumberString, IsString, Max, MaxLength, Min, MinLength} from "class-validator";

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;
}