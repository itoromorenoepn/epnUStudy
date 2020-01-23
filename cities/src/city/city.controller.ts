import { Controller } from "@nestjs/common";
import { CityService } from "./city.service";

@Controller('usuario')
export class CityController {
   // nombre="";
    constructor(
        private readonly _usuarioService: CityService,
    ) {

    }
}