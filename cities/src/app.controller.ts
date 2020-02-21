import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/class')
  routeCreateCity(
      @Res() res,
  ) {
      res.render(
          'class/routes/show-class',
      );
  }

  @Get('/classes')
  class(
      @Res() res,
  ) {
      res.render(
          'history/routes/history',
      );
  }

  @Get('/clast')
  show(
      @Res() res,
  ) {
      res.render(
          'subject/routes/add-subject',
      );
  }
}
