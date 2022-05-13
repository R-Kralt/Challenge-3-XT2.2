
mapboxgl.accessToken = 'pk.eyJ1IjoicmtyYWx0IiwiYSI6ImNsMzR1YmZpaTA0bTMzY3A2MGkzbTE5MmIifQ.UOqCNiA8PudgP-yo79FTVQ';

var url = 'https://api.openweathermap.org/data/2.5/weather';
var apiKey ='fadb4512efaebccb65475d1c8d68fff6';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [100, 62],
  zoom: 10
});
 

document.getElementById('locate').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
  map.flyTo({
    center: [
     4.767642,52.302466
    ],
  essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});

document.getElementById('locate2').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
  map.flyTo({
    center: [
      49.808605,26.479232
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('locate3').addEventListener('click', function () {
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
  map.flyTo({
    center: [
      15.470976,78.245172
    ],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});



var geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [4.767642,52.302466]
    },
  'properties': {
    'title': 'Schiphol Airport',
    'description' : 'Schiphol is the biggest airport in the Netherlands and is located in the capital of the Netherlands'
  }
  },
  {
  'type': 'Feature',
  'geometry': {
    'type': 'Point',
    'coordinates': [49.808605,26.479232]
  },
    'properties': {
      'title': 'the King Fahd International Airport',
      'description' : 'The king Fahd international airport is known as the biggest airport in the world and is located in Dammam in Saudi Arabia'
  }
  },
  {
  'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [15.470976,78.245172]
  },
    'properties': {
      'title': 'Svalbard Airport',
      'description': 'Svalbard airport is the most northern pupblic Airport and is part of norway'
    }
}
]
};


// add markers to map
geojson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
 
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
      '<h3>' +
      marker.properties.title +
      '</h3><p>' +
      marker.properties.description +
      '</p>'
      )
  )
.addTo(map);
});

function getNasaData(){
    var spaceData = "http://api.open-notify.org/astros.json";

    fetch(spaceData)

    .then(function(response){
      return response.json(); 
    })

     .then(function(response){
      console.log(response); 
      showNasaData(response);
    })

}
getNasaData();

function showNasaData(response){

    var numberPeople = response.number;

    var nameBox = document.getElementById('names');
    nameBox.innerHTML = '<h2>' + 'Number of people in space: ' + '</h2>' + '<br>' + '<b>' + numberPeople + '</b>';
}




function getAPIdata(city) {
    // construct request
    var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
    
    // get current weather
    fetch(request)
    
    // parse to JSON format
    .then(function(response) {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })
    
    // render weather per day
    .then(function(response) {
      // render weatherCondition
    onAPISucces(response);  
    })
  
}


function onAPISucces(response) {
    // get type of weather in string format
    var type = response.weather[0].description;
    // get temperature in Celcius
    var degC = Math.floor(response.main.temp - 273.15);
    var windSpeed = response.wind.speed;
    var windDeg = response.wind.deg;
    var visibility = response.visibility;

    // render weather in DOM
    var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = degC + '&#176;C <br>' + type + '<br>' + 'Wind speed: ' + windSpeed + '<br>' + 'Wind direction: ' + windDeg + '<br>' + 'visibility: ' + visibility;

}

var Amsterdam = getAPIdata('Amsterdam%20');

// init data stream
getAPIdata();


function getAPIdata2(city) {
    // construct request
    var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
    
    // get current weather
    fetch(request)
    
    // parse to JSON format
    .then(function(response) {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })
    
    // render weather per day
    .then(function(response) {
      // render weatherCondition
      onAPISucces2(response);  
  })
}


function onAPISucces2(response) {
    // get type of weather in string format
    var type = response.weather[0].description;

    // get temperature in Celcius
    var degC = Math.floor(response.main.temp - 273.15);
    var windSpeed = response.wind.speed;
    var windDeg = response.wind.deg;
    var visibility = response.visibility;

    // render weather in DOM
    var weatherBox = document.getElementById('weather2');
    weatherBox.innerHTML = degC + '&#176;C <br>' + type + '<br>' + 'Wind speed: ' + windSpeed + '<br>' + 'Wind direction: ' + windDeg + '<br>' + 'visibility: ' + visibility;

}

var Dammam = getAPIdata2('Dammam');


// init data stream
getAPIdata2();

function getAPIdata3(city) {
    // construct request
    var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
    
    // get current weather
    fetch(request)
    
    // parse to JSON format
    .then(function(response) {
      if(!response.ok) throw Error(response.statusText);
      return response.json();
    })
    
    // render weather per day
    .then(function(response) {
      // render weatherCondition
      onAPISucces3(response);  
    })
  
}


function onAPISucces3(response) {
    // get type of weather in string format
    var type = response.weather[0].description;

    // get temperature in Celcius
    var degC = Math.floor(response.main.temp - 273.15);
    var windSpeed = response.wind.speed;
    var windDeg = response.wind.deg;
    var visibility = response.visibility;

    // render weather in DOM
    var weatherBox = document.getElementById('weather3');
    weatherBox.innerHTML = degC + '&#176;C <br>' + type + '<br>' + 'Wind speed: ' + windSpeed + '<br>' + 'Wind direction: ' + windDeg + '<br>' + 'visibility: ' + visibility;

}

var Svalbard = getAPIdata3('Svalbard');


// init data stream
getAPIdata3();

