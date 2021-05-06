{
    const dishes = [
        {
            name: 'Eggplant Parmesan',
            vegetarian: true
        },
        {
            name: 'Spaghetti & Meatballs',
            vegetarian: false
        },
        {
            name: 'Spaghetti & Tomatoes',
            vegetarian: true
        },
        {
            name: 'Cheese Pizza',
            vegetarian: true
        },
        {
            name: 'Pizza',
            vegetarian: false
        }
    ];

    const vegetarianDishes = getVegetarian(dishes),
        vegetarianDishesList = createList(vegetarianDishes);

    addToPage(vegetarianDishesList, 'menu');

    function getVegetarian(arr) {
        return arr.filter(el => {
            return el.vegetarian;
        });
    }

    function createList(arr) {
        let list = '<ul>';
        arr.forEach(el => {
            list += `<li>${el.name}</li>`;
        });
        list += '</ul>';
        return list;
    }

    function addToPage(html, selector = 'body') {
        const pageElement = document.querySelector(selector);
        pageElement.innerHTML += html;
    }
}