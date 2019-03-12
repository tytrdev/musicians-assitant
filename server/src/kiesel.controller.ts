import { Controller, Get } from '@nestjs/common';
import { KieselService } from './kiesel.service';
import KieselEntry from './schema/KieselEntry';

@Controller('/kiesel')
export class KieselController {
  constructor(private readonly kieselService: KieselService) {}

  @Get('/basses')
  getBasses(): [KieselEntry] {
    return this.kieselService.getBasses();
  }
}
