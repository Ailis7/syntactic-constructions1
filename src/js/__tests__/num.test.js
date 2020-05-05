import numberTranspose from '../app';

test('null', () => {
  const result = numberTranspose(null);
  expect(result).toEual([Error: Не валидное значение]);
});

test('array', () => {
  const result = numberTranspose([]);
  const result2 = numberTranspose([123]);
  expect(result).toThrowError('Не валидное значение');
  expect(result2).toThrowError('Не валидное значение');
});

test('obj', () => {
  const result = numberTranspose({ test: 'test' });
  expect(result).toThrowError('Не валидное значение');
});

test('string', () => {
  const result = numberTranspose('test');
  expect(result).toThrowError('Не валидное значение');
});
