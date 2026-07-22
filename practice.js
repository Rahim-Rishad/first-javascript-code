const a = 20;
const b = 30;
const sum = a + b;
console.log(sum);  // output: 50
console.log(typeof sum);  // output: number
console.log(a+" "+b);  // output: 20 30
console.log(a+b);  // output: 50

const stringNum1 = "10";
const stringNum2 = "20";
const StringtoNum = parseInt(stringNum1) + parseInt(stringNum2);
console.log(StringtoNum);

const floatnum1 = 6.77444444444444444;
const foatnum2 = 7.2766666666666666666;
const floatnum3 = 5.247777777777;
const sumoffloat = floatnum1 + floatnum3 + foatnum2;

const onlytwoDigit = sumoffloat.toFixed(4);
console.log(onlytwoDigit);  // .toFixed(any digit) use for specific number of digit after decimal.

const floatString1 = "0.23";
const floatString2 = "0.98";
 
const StringtoFloat = parseFloat (floatString1) + parseFloat (floatString2);  //parseFloat use for String to Float convert.
console.log(StringtoFloat);

let price = 200;
price = 150;

// price =  price - 50

price -= 40;
price++;  //  1 kore barbe
price--;  // 1 kore kombe

console.log(price++);
console.log(price);  // 1 barbe but first e 110 show korbe then 111 show korbe.

//shortchut 
console.log(++price);