import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator'

export class UsuarioCreateDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(80)
    nombre:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(24)
    nombreUsuario:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    contrasena:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    cedula:string;
}