//api mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoicmtyYWx0IiwiYSI6ImNrbXZvdnFkbDA3OHcydm16a2QzbWF6NGIifQ.Q85ewEZWS1EtYWNPcqs1jA';
    var map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/satellite-v9', 
        center: [5.104480, 52.092876], 
        zoom: 6 
    });

//api weathermap
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey= 'fed2cd3e8e220e2aba1b7a135711fe90';

// Pop-up landingsplaatsen
    var popSchiphol = new mapboxgl.Popup().setHTML('<h3>Schiphol airport</h3>')
    var popEindhoven = new mapboxgl.Popup().setHTML('<h3>Eindhoven airport</h3>')
    var popRotterdam = new mapboxgl.Popup().setHTML('<h3>Rotterdam airport</h3>')
    var popMaastricht = new mapboxgl.Popup().setHTML('<h3>Maastricht airport</h3>')
    var popGroningen = new mapboxgl.Popup().setHTML('<h3>groningen airport</h3>')

    var schiphol = new mapboxgl.Marker()
        .setLngLat([4.760830, 52.309269])
        .setPopup(popSchiphol)
        .addTo(map);

    var eindhoven = new mapboxgl.Marker()
        .setLngLat([5.478000, 51.436600])
        .setPopup(popEindhoven)
        .addTo(map);

    var rotterdam = new mapboxgl.Marker()
        .setLngLat([4.470590, 51.922909])
        .setPopup(popRotterdam)
        .addTo(map);

    var maastricht = new mapboxgl.Marker()
        .setLngLat([5.780981540679932, 50.924339294433594])
        .setPopup(popMaastricht)
        .addTo(map);

    var groningen = new mapboxgl.Marker()
        .setLngLat([7.0336195, 53.2089324])
        .setPopup(popGroningen)
        .addTo(map);

//open weather voor stad

    var button = document.querySelector('.button')
    var inputValue = document.querySelector('.inputValue')
    var name = document.querySelector('.name')
    var desc = document.querySelector('.desc')
    var temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&lang=nl&appid=fed2cd3e8e220e2aba1b7a135711fe90')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = Math.round(data.main.temp)
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue - 273 + " graden";
            desc.innerHTML = descValue;
        })

    .catch(err => alert("Verkeerde stad!"))

})