import { Controller, Get, Res, Render, Post, Body, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('chec')
  check(
    @Res() res,
    @Session() session,
  ){
    res.render(
      'rol/select-rol',
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

  @Get('yourclass')
  your(
    @Res() res,
    @Session() session,
  ){
    res.render(
      'class/routes/show-class',
      {
        datos: {
          session
        }
      }
  );
  }
  @Get('yoursubject')
  yourSu(
    @Res() res,
    @Session() session,
  ){
    res.render(
      'class/routes/show-class',
      {
        datos: {
          session
        }
      }
  );
  //return "hola";
  }
  @Get('createclass')
  createClass(
    @Res() res,
    @Session() session,
  ){
    res.render(
      'class/routes/class-form',
      {
        datos: {
          session
        }
      }
  );
  //return "hola";
  }
}
  
