import { Injectable } from '@nestjs/common';
import Scraper from './scraper';
import KieselEntry from './schema/KieselEntry';

@Injectable()
export class KieselService {
  scraper: Scraper;

  constructor() {
    this.scraper = new Scraper('https://www.kieselguitars.com/guitarsinstock/bass-guitars');
  }

  getBasses(): [KieselEntry] {
    return this.scraper.scrape();
  }
}
