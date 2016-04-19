import 'es6-promise';
import 'fetch-polyfill';

const URL = {
  WIKI: 'http://en.wikipedia.org/wiki/List_of_banks_%28alphabetically%29',
  BASELINK: 'http://en.wikipedia.org',
  FETCHURL: '//alloworigin.com/get?url='
};

export default () => fetch(URL.FETCHURL + encodeURIComponent(URL.WIKI))
  .then(response => response.text())
  .then(response => JSON.parse(response).contents)
  .then(parseBanks)
  .catch(error => console.log(error));

/*********************************************
                  helpers
*********************************************/

// bad idea global
var bankId = 0;

/**
 * @type {Number} id
 * @type {String} link
 * @type {String} name
 * @type {String} city
 * @type {String} country
 */
class Bank {
  constructor(bank) {
    this.id = bankId++;
    this.link = bank.link;
    this.name = bank.name;
    this.city = bank.city;
    this.country = bank.country;
  }

  toString() {
    return this.name;
  }
}

/**
 * Parse html for get banks between <ol>..</ol>
 * @param  {string} html
 * @return {array<Bank>}
 */
function parseBanks(html) {
  return html.replace(/\s/g, ' ')
    .match(/<ol>(.+?)<\/ol>/g)
    .map(parseBanksList)
    .reduce((prev, cur) => {
      return prev.concat(cur);
    }, []);
}

// <li>..</li>
function parseBanksList(bankList) {
  return bankList
    .match(/<li>(.+?)<\/li>/g)
    .map(parseBank);
}

// <li><a href="...">...</a>, ..., ...</li>
function parseBank(bank) {
  bank = bank.match(/<li>(.+?)<\/li>/)[1];
  var arr = bank.split(',');

  return new Bank({
    link: parseBanklink(bank),
    name: parseBankName(bank),
    city: arr[arr.length - 2],
    country: arr[arr.length - 1],
  });
}

// <a href="...">...</a>
function parseBanklink(bank) {
  var arr = bank.match(/href="(.+?)"/);
  return (arr && arr.length) ? `${ URL.BASELINK }/${ arr[1] }` : arr;
}

// <a href="...">...</a>
function parseBankName(bank) {
  var arr = bank.match(/<a(?:.+?)>(.+?)<\/a>/);
  return (arr && arr.length) ? arr[1] : arr;
}
