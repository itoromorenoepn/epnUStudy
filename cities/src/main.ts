import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as session from 'express-session';

const FileStore = require('session-file-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as any;
  app.use(
    session({
      name: 'server-session-id',
      secret: 'Secreto',
      resave: true,
      saveUninitialized: true,
      cookie: {secure: false},
      store: new FileStore(),
    }),
);
  app.set('view engine','ejs')
  app.use('/public', express.static('public'));
  await app.listen(3000);
}
bootstrap();
