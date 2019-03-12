import Axios from 'axios';
import KieselEntry from './schema/KieselEntry';

class Scraper {
    url: String;

    constructor(url: String) {
        this.url = url;
    }

    setUrl(url: String) {
        this.url = url;
    }

    scrape(): [KieselEntry] {
        // TODO: Do scraping for data
        return [{
            title: 'Bass 1',
            pickups: 'Green and shit',
        }];
    }
}

export default Scraper;
