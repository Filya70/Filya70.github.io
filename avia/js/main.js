
const  formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo= formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');

const city = ['Москва', 'Санк-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керчь', 'Волгоград', 'Самара', 'Днепропетровск',
    'Екатеринбург', 'Одесса', 'Ухань', 'Шымкент', 'Нижний новгород', 'Калининград', 'Вроцлав', 'Ростов-на-дону', 'Томск', 'Новосибирск'];


// DROPDOWN FILTER AND SHOW
const showCity = (input, list) =>{

    list.textContent = '';

    if(input.value !== ''){

        const filterCity = city.filter((item) => {
            if (inputCitiesFrom.value !== item && inputCitiesTo.value !== item){
                const fixItem = item.toLowerCase();
                return fixItem.includes(input.value.toLowerCase())
            }
        });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    }
};

// SELECT FUNCTION
const handlerCity = (e, input, list) =>{
    const target  = (e.target);
    if(target.tagName.toUpperCase() === 'LI'){
        input.value = target.textContent;
        list.textContent = '';
    }
};


// DROPDOWN FILTER AND SHOW
inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});
inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});


// SELECT CITY
dropdownCitiesFrom.addEventListener('click', (e) => {
    handlerCity(e, inputCitiesFrom ,dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (e) => {
    handlerCity(e, inputCitiesTo, dropdownCitiesTo);
});
