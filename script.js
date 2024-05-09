let apiKeyInput = document.querySelector('#keyInput')
const button = document.querySelector('#submitButton')
let cityInput = document.querySelector('#textInput')
let cityTemp = document.querySelector('#temp')
let cityHumid = document.querySelector('#cityHumid')
let cityFeelsTemp = document.querySelector('#feelsTemp')
let cityName = document.querySelector('#cityName')
let cityCountry = document.querySelector('#cityCountry')
let cityRegion = document.querySelector('#cityRegion')
let cityRain = document.querySelector('#cityRain')

button.addEventListener('click', async () => {
   
    let city = cityInput.value
    let apiKey = apiKeyInput.value
    document.getElementById('cityName').innerHTML = city
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    
    let getCityTemp = response.data.current.temp_c
    document.getElementById('temp').innerHTML = getCityTemp + ' degrees C'
    let getCityFeelsTemp = response.data.current.feelslike_c
    document.getElementById('feelsTemp').innerHTML = 'Feels like ' +  getCityFeelsTemp + ' degrees C'
    let getCityHumid = response.data.current.humidity
    document.getElementById('cityHumid').innerHTML = 'Humidity: ' + getCityHumid
    let getCityCountry = response.data.location.country
    document.getElementById('cityCountry').innerHTML = getCityCountry + ' '
    let getCityRegion = response.data.location.region
    document.getElementById('cityRegion').innerHTML = getCityRegion + "/ "

    let getCityRain = response.data.current.precip_mm

    if (getCityRain > 0 && getCityRain < 2.5 ) {
        document.getElementById('cityRain').innerHTML = 'Light Drizzle'
        document.getElementById('card').style.backgroundImage = "url(https://media.istockphoto.com/id/958956522/photo/rain-drops-on-window-glass-outside-texture-background-water-of-wonderful-heavy-rainy-day-with.jpg?s=612x612&w=0&k=20&c=L6UJE5JjEstBt-xj4k0BDAA565BPWyfbu37CFgwZGos=)"

    }else if (getCityRain >= 2.5 && getCityRain < 7.6) {
        document.getElementById('cityRain').innerHTML = 'Moderate Rain'
        document.getElementById('card').style.backgroundImage = "url(https://media.istockphoto.com/id/926306716/photo/stormy-sky-and-rain-apocalypse-like.jpg?s=612x612&w=0&k=20&c=1T4ETIyrGnZvqGF3zY0vtV2pOHVR3PbJAc4jLZRuwo8=)"
        

    }else if (getCityRain >= 7.6) {
        document.getElementById('cityRain').innerHTML = 'Heavy Rain'
        document.getElementById('card').style.backgroundImage = "url(https://media.istockphoto.com/id/1413399054/photo/cloudy-overcast-sky-with-rain.jpg?s=612x612&w=0&k=20&c=ulT2MF5GeGiU4uOVWZBM1z5YjwHdGi19DXJtdvYx8As=)"

    }else if (getCityRain < 0) {
        document.getElementById('cityRain').innerHTML = 'End of days'
        document.getElementById('card').style.backgroundImage = "url(https://media.istockphoto.com/id/939762314/photo/blazing-fire-border-isolated-on-black.jpg?s=612x612&w=0&k=20&c=_RGTJUIBoXzpnrEsDT1IJ5Dz6RPwkfF1DLuhKpmkgTw=)"

    }else if (getCityRain == 0) {
        document.getElementById('cityRain').innerHTML = 'Sunny'
        document.getElementById('card').style.backgroundImage = "url(https://t3.ftcdn.net/jpg/00/68/79/54/360_F_68795433_fjQuxeXBgS8WwBimyZgFcfIFFA5pRacx.jpg)"
        
    }    

})