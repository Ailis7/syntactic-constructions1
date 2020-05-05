// TODO: write your code here

export default function numberTranspose(data) {
  try {
    const num = +data;
    console.log(num);
    if (Number.isNaN(num) || typeof data === 'object') throw new Error('Не валидное значение');
    return num;
  } catch (e) {
    throw Error('Не валидное значение');
  }
}

numberTranspose(123);
