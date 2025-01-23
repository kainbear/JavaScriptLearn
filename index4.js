const mySity = {
    city: 'New York',
    citySreeting() {
        console.log('Сокращенная функция')
    }
}

mySity.citySreeting()

const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Не Сокращенная функция')
    }
}

myCity.cityGreeting()