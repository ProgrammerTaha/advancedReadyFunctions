const reverseArray = (arr) => {
  const emptyArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    emptyArr.push(arr[i]);
  }
  return emptyArr.join(' ');
};

const sentence = ['2020', 'year', '1', 'in', 'Programmer', 'JS', 'professional', 'a', 'be', 'will', 'Taha'];

console.log(reverseArray(sentence));