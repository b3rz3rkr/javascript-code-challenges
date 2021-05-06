{
    async function getUsers(num = 5) {
        const url = `https://randomuser.me/api/?results=${num}`;
        const file = await fetch(url);
        const userData = await file.json();
        let images = '';
        userData.results.forEach(user => images += getUserImg(user));
        addToPage(images);
    }

    function getUserImg(user) {
        return `<img alt="${user.name.first} ${user.name.last}" src="${user.picture.large}">`;
    }

    function addToPage(html, selector = 'body') {
        const pageElement = document.querySelector(selector);
        pageElement.innerHTML += html;
    }


    getUsers();
}