{
    const vendors = {
        vendor1: ['pizza', 'pasta'],
        vendor2: ['pizza', 'calzones'],
        vendor3: ['lobster'],
        vendor4: ['calzones']
    };

    foodToPage();

    function foodToPage() {
        const food = getUnique(vendors.vendor1, vendors.vendor2, vendors.vendor3, vendors.vendor4),
            foodList = createList(food);
        addToPage(foodList, '#combined-menu');

    }

    function getUnique(...arrays) {
        const newArray = arrays.flat();
        return [...new Set(newArray)];
    }

    function createList(arr) {
        let list = '<ul>';
        arr.forEach(el => {
            list += `<li>${el}</li>`;
        });
        list += '</ul>';
        return list;
    }

    function addToPage(html, selector = 'body') {
        const pageElement = document.querySelector(selector);
        pageElement.innerHTML += html;
    }
}