import { Injectable } from '@nestjs/common';
import Scraper from './scraper';
import KieselEntry from './schema/KieselEntry';

@Injectable()
export class KieselService {
  bassScraper: Scraper;
  guitarScraper: Scraper;

  constructor() {
    this.bassScraper = new Scraper('https://www.kieselguitars.com/guitarsinstock/bass-guitars');
    this.guitarScraper = new Scraper('https://www.kieselguitars.com/guitarsinstock/electric-guitars');
  }

  getBasses() {
    return this.bassScraper.scrape();
  }

  getGuitars() {
    return this.guitarScraper.scrape();
  }
}
