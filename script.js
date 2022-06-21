function toReadable(number){
  let numberStr = String(number);
  const digits={
    0: 'zero', 10: 'ten',
    1: 'one', 11: 'eleven',     
    2: 'two', 12: 'twelve',
    3: 'three', 13: 'thirteen',
    4: 'four', 14: 'fourteen',
    5: 'five', 15: 'fifteen',
    6: 'six', 16: 'sixteen',
    7: 'seven', 17: 'seventeen',
    8: 'eigth', 18: 'eighteen',
    9: 'nine',  19: 'nineteen'
  };
  const dozens={
    2: 'twenty', 
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

if(number<20) {
  return `${digits[number]}`;
} else if (number<100) {
  return number % 10 === 0 ? `${dozens[numberStr[0]]}` : `${dozens[numberStr[0]]} ${digits[numberStr[1]]}`;
} else {
  let res ='';
  if (number % 100 === 0) {
    res = `${digits[numberStr[0]]} hundred`;
  } else if (numberStr[1]+numberStr[2] <20) {
    res = `${digits[numberStr[0]]} hundred ${numberStr[1]==='0' ? digits[numberStr[2]] : digits[numberStr[1]+numberStr[2]]}`;
  } else {
    res = `${digits[numberStr[0]]} hundred ${dozens[numberStr[1]]} ${digits[numberStr[2]]}`
  }
  return res;

}

  

  
  
}

  console.log(toReadable('954'));
