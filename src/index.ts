const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000; //         1.000.000.000 (9)
const ONE_TRILLION = 1000000000000; //     1.000.000.000.000 (12)

const LESS_THAN_TWENTY = [
  'zero',
  'unu',
  'doi',
  'trei',
  'patru',
  'cinci',
  'șase',
  'șapte',
  'opt',
  'nouă',
  'zece',
  'unsprezece',
  'doisprezece',
  'treisprezece',
  'paisprezece',
  'cincisprezece',
  'șaisprezece',
  'șaptesprezece',
  'optsprezece',
  'nouăsprezece',
];

const TENTHS_LESS_THAN_HUNDRED = [
  'zero',
  'zece',
  'douăzeci',
  'treizeci',
  'patruzeci',
  'cincizeci',
  'șaizeci',
  'șaptezeci',
  'optzeci',
  'nouăzeci',
];

export function generateWords(nr: number, words?: string[]): string {
  let remainder: number = 0;
  let word: string = '';

  // If NaN just stop and return 'NaN'
  if (isNaN(nr)) {
    return 'NaN';
  }

  // We’re done
  if (nr === 0) {
    return !words ? 'zero' : words.join(' ').replace(/,$/, '');
  }
  // First run
  if (!words) {
    words = [];
  }
  // If negative, prepend “minus”
  if (nr < 0) {
    words.push('minus');
    nr = Math.abs(nr);
  }

  if (nr < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[nr];
  } else if (nr < ONE_HUNDRED) {
    remainder = nr % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(nr / TEN)];
    // In case of remainder, we need to handle it here to be able to add the “ si ”
    if (remainder) {
      word += ' și ' + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  } else if (nr < ONE_THOUSAND) {
    remainder = nr % ONE_HUNDRED;
    const hundreds = Math.floor(nr / ONE_HUNDRED);
    if (hundreds === 1) {
      word = 'o sută';
    } else if (hundreds === 2) {
      word = 'două sute';
    } else {
      word = generateWords(hundreds) + ' sute';
    }
  } else if (nr < ONE_MILLION) {
    remainder = nr % ONE_THOUSAND;
    const thousands = Math.floor(nr / ONE_THOUSAND);
    if (thousands === 1) {
      word = 'o mie';
    } else if (thousands === 2) {
      word = 'două mii';
    } else if (thousands < 20) {
      word = generateWords(thousands) + ' mii';
    } else {
      word = generateWords(thousands) + ' de mii';
    }
  } else if (nr < ONE_BILLION) {
    remainder = nr % ONE_MILLION;
    const millions = Math.floor(nr / ONE_MILLION);
    if (millions === 1) {
      word = 'un milion';
    } else if (millions === 2) {
      word = 'două milioane';
    } else if (millions < 20) {
      word = generateWords(millions) + ' milioane';
    } else {
      word = generateWords(millions) + ' de milioane';
    }
  } else if (nr < ONE_TRILLION) {
    remainder = nr % ONE_BILLION;
    const billions = Math.floor(nr / ONE_BILLION);
    if (billions === 1) {
      word = 'un miliard';
    } else if (billions === 2) {
      word = 'două miliarde';
    } else if (billions < 20) {
      word = generateWords(billions) + ' miliarde';
    } else {
      word = generateWords(billions) + ' de miliarde';
    }
  }

  words.push(word);
  return generateWords(remainder, words);
}