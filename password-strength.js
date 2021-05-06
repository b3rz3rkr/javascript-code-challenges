{
    const passInput = document.getElementById('pass');
    passInput.addEventListener('keyup', function () {
        this.setCustomValidity(passValidator(this.value));
    });

    function passValidator(pass) {
        if (pass.length < 8) {
            return 'Minimum length is 8 characters';
        }
        if (pass.toUpperCase() === pass) {
            return 'It must contain at least 1 Lower Case character';
        }
        if (pass.toLowerCase() === pass) {
            return 'It must contain at least 1 Upper Case character';
        }

        const nums = /\d/;
        const symbols = /\W/;

        if (!nums.test(pass)) {
            return 'It must contain at least 1 digit';
        }

        if (!symbols.test(pass)) {
            return 'It must contain at least 1 special symbol';
        }
        console.log(pass, 'pass is valid');
        return '';
    }
}