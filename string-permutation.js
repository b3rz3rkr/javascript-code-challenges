{
    const string = 'hello world';
    const variants = factorial(string.length);
    console.log(variants);

    function factorial(n) {
        if (n > 2) {
            return n * factorial(n - 1);
        }
        return n;
    }
}