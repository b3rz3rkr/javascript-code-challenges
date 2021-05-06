{
    const train = trainGenerator();

    const trainBtn = document.querySelector('#train');

    trainBtn.addEventListener('click', () => {
        const current = train.next();
        if (true === current.done) {
            trainBtn.setAttribute('disabled', 'disabled');
            console.log('We made it!');
            return;
        }
        console.log(current.value);
    });

    function* trainGenerator() {
        yield 'Poughkeepsie';
        yield 'Newburgh';
        yield 'Peekskill';
        yield 'Yonkers';
        yield 'Bronx';
        yield 'Grand Central';
    }
}