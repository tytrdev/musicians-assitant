import Axios from 'axios';
import KieselEntry from './schema/KieselEntry';

function transformEntry(entry): KieselEntry {
    const _ = require('lodash');

    // TODO: Do scraping for data
    const bass = new KieselEntry();

    const cells = _.filter(entry.children, c => c.name === 'td');
    
    const modelCell = cells[0];
    const descriptionCell = cells[1];
    const buildCell = cells[2];
    const priceCell = cells[3];

    // Model Cell
    bass.modelUrl = modelCell.children[0].attribs.href;
    bass.model = modelCell.children[0].children[0].data;
    bass.serialNumber = modelCell.children[2].data;
    bass.imageUrl = modelCell.children[5].children[1].attribs.src;

    // Description Cell
    bass.description = descriptionCell.children[0].data;

    // Build Cell
    // TODO: Get build options and notes

    // Price Cell
    bass.originalPrice = priceCell.children[0].children[0].data;
    bass.currentPrice = priceCell.children[1].children[0].data;
    bass.savings = priceCell.children[5].children[0].data;

    bass.options = ['UM'];

    return bass;
}

class Scraper {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    setUrl(url: string) {
        this.url = url;
    }

    async scrape() {
        const cheerio = require('cheerio');
        const response = await Axios(this.url);
        const html = response.data;

        const $ = cheerio.load(html);

        const rows = $("table[width=945] tr");

        const basses = [];

        // Skip 0th bass
        for(let i = 1; i < rows.length; i++) {
            basses.push(transformEntry(rows[i]));
        }

        return basses;
    }
}

export default Scraper;
