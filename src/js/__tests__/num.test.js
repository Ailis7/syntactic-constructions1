import numberTranspose from '../app';

test('null', () => {
  expect(() => {
    numberTranspose(null);
  }).toThrow();
});

test('arr', () => {
  expect(() => {
    numberTranspose([123, 123]);
  }).toThrow();
});

test('obj', () => {
  expect(() => {
    numberTranspose({ test: 'test' });
  }).toThrowError();
});

test('string', () => {
  expect(() => {
    numberTranspose('привет');
  }).toThrow();
});

test('number', () => {
  const result = numberTranspose(55);
  expect(result).toBe(55);
});

test('другие системы счисления', () => {
  expect(() => {
    numberTranspose('0xff');
  }).toThrowError();
});
