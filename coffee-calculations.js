{
    const coffees = [2, 3, 1, 5];
    const
        price = 1.25,
        totalPrice = 13.75;

    function calcCoffes() {
        const totalCups = coffees.reduce((accumulator, currentValue) => accumulator + currentValue);
        const total = totalCups * price;
        console.log(totalPrice === total);
        return `The total bill is $${total}`;
    }
    console.log(calcCoffes());
}