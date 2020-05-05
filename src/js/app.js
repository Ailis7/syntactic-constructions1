// TODO: write your code here

export default function numberTranspose(data) {
  let vague = data;
  try {
    vague = +vague;
    if (Number.isNaN(vague) || typeof data === 'object') throw new Error('Не валидное значение');
    return vague;
  } catch (e) {
    console.log(e);
    return e;
  }
}

numberTranspose();
