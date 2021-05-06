{
    function urlify(string) {
        const symbols = /[.,<>;':"/\\|!@#$%^&*()_+={}\[\]]/g;
        string = string.toLowerCase().trim();
        string = string.replace(symbols, '');
        string = string.replaceAll(' ', '-');

        return string;
    }

    console.log(urlify('My blog name!'));
    console.log(urlify('Emma\'s blog'));
}