import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class AssingmentDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(16)
    name: string;
}