import {IsEmpty, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength} from "class-validator";

export class CityUpdateDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    id: number;
}
