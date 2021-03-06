import { generateWords } from '../lib';

test('should return "unu"', () => {
  expect(generateWords(1)).toBe('unu');
});

test('should return "nouăsprezece"', () => {
  expect(generateWords(19)).toBe('nouăsprezece');
});

test('should return "douăzeci și unu"', () => {
  expect(generateWords(21)).toBe('douăzeci și unu');
});

test('should return "o sută"', () => {
    expect(generateWords(100)).toBe('o sută');
});

test('should return "două sute"', () => {
    expect(generateWords(200)).toBe('două sute');
});

test('should return "o sută douăzeci și cinci"', () => {
    expect(generateWords(125)).toBe('o sută douăzeci și cinci');
});

test('should return "o mie"', () => {
    expect(generateWords(1000)).toBe('o mie');
});

test('should return "o mie unu"', () => {
    expect(generateWords(1001)).toBe('o mie unu');
});

test('should return "o sută optsprezece mii nouă sute treizeci și unu"', () => {
  expect(generateWords(118931)).toBe('o sută optsprezece mii nouă sute treizeci și unu');
});

test('should return "două sute patruzeci și cinci de mii o sută"', () => {
  expect(generateWords(245100)).toBe('două sute patruzeci și cinci de mii o sută');
});

test('should return "un milion"', () => {
  expect(generateWords(1000000)).toBe('un milion');
});

test('should return "un milion două sute cincizeci și nouă de mii șase sute treizeci și unu"', () => {
  expect(generateWords(1259631)).toBe('un milion două sute cincizeci și nouă de mii șase sute treizeci și unu');
});

test('should return "o sută unu milioane două sute treizeci de mii patru sute șaizeci și cinci"', () => {
  expect(generateWords(101230465)).toBe('o sută unu milioane două sute treizeci de mii patru sute șaizeci și cinci');
});

test('should return "cinci miliarde o sută unu milioane două sute treizeci de mii patru sute șaizeci și cinci"', () => {
  expect(generateWords(5101230465)).toBe('cinci miliarde o sută unu milioane două sute treizeci de mii patru sute șaizeci și cinci');
});

test('should return "nouă sute nouăzeci și nouă de miliarde nouă sute nouăzeci și nouă de milioane nouă sute nouăzeci și nouă de mii nouă sute nouăzeci și nouă"', () => {
  expect(generateWords(999999999999)).toBe('nouă sute nouăzeci și nouă de miliarde nouă sute nouăzeci și nouă de milioane nouă sute nouăzeci și nouă de mii nouă sute nouăzeci și nouă');
});

