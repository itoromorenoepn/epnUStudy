import { Controller, Get, Res, Render, Post, Body, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('check')
  check(
    @Res() res,
    @Session() session,
  ){
    res.render(
      'rol/check-rol',
      {
        datos: {
          session
        }
      }
  );
  }

  @Post('check')
  checkear(
    @Body() rol,
    @Res() res,
  ){
    console.log(rol)
  }  

}
  
