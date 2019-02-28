// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

for (let i = 1; i < 101; i++){
    if (i % 5 === 0 && i % 7 === 0) {
        console.log('ChickenMonkey')
    } else if (i % 7 === 0){
        console.log('Monkey')
    } else if (i % 5 === 0) {
        console.log('Chicken')
    } else {
        console.log(i)
    }
};
