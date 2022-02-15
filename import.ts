import { getCocktails } from './theCocktailsDbAPIClient';
import * as fs from 'fs';
import drinks from './cocktails.json';
import { Drink } from './types';

const cocktails = [...(drinks as Drink[])];

(async function main() {
  console.log();

  while (true) {
    console.log('requesting the api...');
    const cocktailsFromAPI = (await getCocktails().request) || [];
    cocktailsFromAPI.forEach((drink) => {
      if (drink && !cocktails.find((d) => d.id == drink.id)) {
        cocktails.push(drink);
        fs.writeFileSync('cocktails.json', JSON.stringify(cocktails));
        console.log(`${drink.id} added`);
      }
    });
  }
})();
