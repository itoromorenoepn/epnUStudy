import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class RoleDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(1)
    name: string;
}