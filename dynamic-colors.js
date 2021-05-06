{
    function changeBodyColor(color) {
        return function () {
            document.body.style.backgroundColor = color;
        };
    }

    function createButtons() {
        const button = document.createElement('button');
        const colors = ['blue', 'pink', 'green'];

        colors.forEach(color => {
            const newButton = button.cloneNode(true);
            newButton.setAttribute('color', color);
            newButton.innerText = color;
            newButton.addEventListener('click', function () {
                const color = this.getAttribute('color');
                changeBodyColor(color)();   // closure just for closure
            });
            document.body.append(newButton);
        });
    }
    createButtons();
}