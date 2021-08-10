// data 1
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// data 2
// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// let message;
// if (markHigherBMI) {
//     message = `Mark's BMI ${markBMI} is higher than John's ${johnBMI}.`;
// } else {
//     message = `Mark's BMI ${markBMI} is lower than John's ${johnBMI}.`;
// }

// console.log(message + '🙌');

// const d1 = 96;
// const d2 = 108;
// const d3 = 89;

// const k1 = 88;
// const k2 = 01;
// const k3 = 110;

// const dAverage = (d1 + d2 + d3) / 3;
// const kAverage = (k1 + k2 + k3) / 3;

// if (dAverage > kAverage) {
//     console.log(`Dolphins team (${dAverage}) has a higher average score than Koalas team (${kAverage}).`);
// } else if (kAverage > dAverage) {
//     console.log(`Koalas team (${kAverage}) has a higher average score than Dolphins team (${dAverage}).`);
// } else {
//     console.log(`Koalas team (${kAverage}) has the same average score as Dolphins team (${dAverage}).`);
// }

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);