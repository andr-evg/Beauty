//DATA
const chairs = [
    {
        title: 'Удобное зеленое кресло',
        price: '1300',
        img: 'img/chair01.png'
    },
    {
        title: 'Стул серый на деревянных ножках',
        price: '1260',
        img: 'img/chair02.jpg'
    },
    {
        title: 'Стул белый на деревянных ножках',
        price: '980',
        img: 'img/chair03.jpg'
    },
    {
        title: 'Кресло черное',
        price: '3399',
        img: 'img/chair04.jpg'
    },
    {
        title: 'Стул деревянный',
        price: '799',
        img: 'img/chair05.jpg'
    },
    {
        title: 'Лавка для дома',
        price: '3499',
        img: 'img/chair06.jpg'
    },
    {
        title: 'Зеленый стул',
        price: '1299',
        img: 'img/chair07.jpg'
    },
    {
        title: 'Геймерское черное кресло',
        price: '3699',
        img: 'img/chair08.jpg'
    },
    {
        title: 'Белое элитное кресло',
        price: '5399',
        img: 'img/chair09.jpg'
    }
]
//VARIABLES
let mainCount = 0
const mobileToggler = document.querySelector('.navbar-toggler')
const startItemNumber = 4
//FUNCTIONS
function createItem(item, elem) {
    elem.insertAdjacentHTML('beforeend',`
    <div class="col-12 col-sm-6 col-lg-3 mb-4 fade-anim">
        <div class="products__item">
        <img class="products__img" src="${item.img}" alt="chair">
            <div class="products__description">${item.title}</div>
            <div class="products__price">${item.price}₴</div>
            <button class="button button__products">Купить</button>
        </div>
    </div>`)
}

function displayItem() {
    for (let i = 0; i < startItemNumber; i++) {
        if (!chairs[mainCount]) {
            return
        }
        createItem(chairs[mainCount], products)
        mainCount++
    }
}

function search() {
    if (searchContainer.classList.contains('d-none')) {
        searchContainer.classList.remove('d-none')
    }

    searchResult.innerHTML = ''
    const searchValue = String(searchInput.value).toLowerCase()
    const searchValueArray = searchValue.split(' ')
    const searchInputValue = searchInput.value
    searchInput.value = ''
    chairs.forEach(item => {
        const itemTitle = item.title.toLowerCase()
        let searchCheck = false

        for(let i = 0; i < searchValueArray.length; i++) {
            if (itemTitle.includes(searchValueArray[i])) {
                searchCheck = true
            } else {
                searchCheck = false
                break
            }
        }
        if (searchCheck) {
            createItem(item, searchResult)
        }
    })
    if (searchResult.innerHTML == '') {
        searchResultInfo.innerHTML = `По запросу 
        <span class="search__result-info">"${searchInputValue}"</span>
         ничего не найдено.`
    } else {
        searchResultInfo.innerHTML = ''
    }
}
//EVENTS
window.onload = () => {
    displayItem()
}

getMore.onclick = () => {
    displayItem()
    if (chairs.length <= mainCount) {
        getMore.style.display = 'none'
    }
}

searchInput.addEventListener('keydown', function(e) {
        if (e.keyCode === 13 && searchInput.value) {
            search()
        }
})

searchBtn.onclick = () => {
    if (searchInput.value) {
        search()
    }
}

mobileToggler.onclick = () => {
    if (!mobileToggler.classList.contains('navbar-toggler--active')) {
        mobileToggler.classList.add('navbar-toggler--active')
    } else {
        mobileToggler.classList.remove('navbar-toggler--active')
    }
}