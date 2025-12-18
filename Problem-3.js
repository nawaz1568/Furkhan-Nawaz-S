
function printConditionalOddSeries(a) {
  let limit = a % 2 === 0 ? a - 1 : a;
  let result = [];

  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }

  console.log(result.join(", "));
}

printConditionalOddSeries(6);
