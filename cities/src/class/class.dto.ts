import { IsNotEmpty, IsDate, IsNumber, Min, Max } from "class-validator";

export class ClassDto {
    @IsNotEmpty()
    @IsDate()
    date;
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(50)
    price;
}