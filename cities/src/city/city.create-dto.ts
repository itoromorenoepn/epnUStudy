import {IsNotEmpty, IsNumberString, IsString, Max, MaxLength, Min, MinLength} from "class-validator";

export class CityCreateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;
}