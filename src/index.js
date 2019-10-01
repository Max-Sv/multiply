module.exports = function multiply(first, second) {
  let arrFirst = first.split('').reverse();
  let arrSecond = second.split('').reverse();
  let stack = [];

  for (let i = 0; i < arrFirst.length; i++) {
    for (let j = 0; j < arrSecond.length; j++) {
      let m = arrFirst[i] * arrSecond[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;
    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }

  return stack.reverse().join('');
}

