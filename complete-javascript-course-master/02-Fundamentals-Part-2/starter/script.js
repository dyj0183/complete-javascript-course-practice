// activate strict mode for the entire script, has to be in the first line of the code
// write more secure codes, easier for debugging as well
'use strict';



// const car1 = function (model) {
//     return `this is a ${model} car1`;
// }

// console.log(car1('Tesla'));

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// const dolAverage = calcAverage(44, 23, 71);
// const koaAverage = calcAverage(65, 54, 49);

// const checkWinner = function (dolAverage, koaAverage) {
//     if (dolAverage > koaAverage * 2) {
//         console.log(`Dolphins team wins (${dolAverage} vs. ${koaAverage})`);
//     } else if (koaAverage > dolAverage * 2) {
//         console.log(`Koala team wins (${koaAverage} vs. ${dolAverage} )`);
//     } else {
//         console.log("No team wins.");
//     }
// }

// checkWinner(dolAverage, koaAverage);

// checkWinner(655, 311);

// add elements
// const friends = ['James', "Gary", "Peter"];
// friends.push('Michael'); // returns length of the new array
// friends.unshift('John');
// console.log(friends);

// friends.pop(); // remove last element
// friends.shift(); // remove the first element
// console.log(friends);
// console.log(friends.indexOf("Gary"));

// const years = new Array(1, 2, 3);
// console.log(years);

// const calcTip = function (bill) {

//     // ternary operator
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     // let tip;
//     // if (bill >= 50 && bill <= 300) {
//     //     tip = bill * 0.15;
//     // } else {
//     //     tip = bill * 0.2;
//     // }
//     // return tip;
// }

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// console.log(bills);

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// console.log(tips);

// total.push(tips[0] + bills[0]);
// total.push(tips[1] + bills[1]);
// total.push(tips[2] + bills[2]);

// console.log(total);

// const jonas = {
//     name: 'jonas',
//     friends: ['Michale', 'Josh', 'Peter'],
//     birthYear: 1994,
//     job: 'teacher',
//     hasLicense: false,
//     // use function expression
//     calAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     checkLicense: function () {
//         return this.hasLicense ? 'has' : 'does not have';
//     }
// }

// // console.log(`${jonas.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// console.log(`${jonas.name} is a ${jonas.calAge()} years old ${jonas.job}, and he ${jonas.checkLicense()} a driver's license.`)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     hieght: 1.69,
//     calBMI: function () {
//         this.BMI = this.mass / (this.hieght * this.hieght);
//         return this.BMI;
//     }
// }


// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     hieght: 1.95,
//     calBMI: function () {
//         this.BMI = this.mass / (this.hieght * this.hieght);
//         return this.BMI;
//     }
// }

// if (mark.calBMI() > john.calBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is less than ${mark.fullName}'s (${mark.BMI}).`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is greater than ${mark.fullName}'s (${mark.BMI}).`)
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bills, tips, totals) {

    for (let bill of bills) {
        // console.log(bill);
        let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
        tips.push(tip);
        let total = bill + tip;
        totals.push(total);
    }

    console.log(bills);
    console.log(tips);
    console.log(totals);

}

calcTip(bills, tips, totals);

const calcAverage = function (arr) {
    let total = 0;

    for (let item of arr) {
        total += item;
    }

    return total / arr.length;
}

const totalAverage = calcAverage([10, 8, 3]);
console.log(totalAverage);
console.log(calcAverage(totals));