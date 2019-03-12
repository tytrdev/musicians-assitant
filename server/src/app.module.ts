import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KieselController } from './kiesel.controller';
import { KieselService } from './kiesel.service';

@Module({
  imports: [],
  controllers: [AppController, KieselController],
  providers: [AppService, KieselService],
})
export class AppModule {}
