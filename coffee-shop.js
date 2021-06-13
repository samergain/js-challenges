function coffee(coffeeArr){
    let coffeeSum = coffeeArr.reduce(
        (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
    )
    return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffee([2,4,1,5]));
