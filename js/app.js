

/* ++++++ traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento +++++ */
const form = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const containerWeather = document.getElementById('container-weather');
let searchedForText;

/* ++++++ agregamos el evento submit y las instrucciones a ejecutar +++++ */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    searchedForText = searchField.value;
    console.log(searchedForText);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedForText}&metric&lang=es&APPID=2f0271f4d85a8277a8f6d04faedcad19`).then((response) => {
        response.json().then(data => {
            drawWeather(data);
            console.log(data);     
        });
    });

});

const drawWeather = data =>{
    //console.log(drawWeather);
    let outputTemplate = ``;
    
    let nameCity = data.name;
    console.log(name);

    let mainInfo = data.main;
    console.log(mainInfo);

    let temp = mainInfo.temp;
    console.log(temp);

    let tempMax = mainInfo.temp_max;
    console.log(tempMax);
    
    let tempMin = mainInfo.temp_min;
    console.log(tempMin);
    

    let weatherInfo = data.weather;
    console.log(weatherInfo);
 for (let i = 0; i < weatherInfo.length; i++) {
     const element = weatherInfo[i];
     let description = element.description;  
 
 outputTemplate +=
    `  
    <div class="col-md-6">
    <h4 class="name">El Clima en la ciudad de: ${nameCity}</h4>
    <div class="card-block">
        <div class="card-content">
            <p> Descripcion del clima: ${description} </p>
            <p> Temperatura: ${temp} </p>
            <p> Temperatura Maxima: ${tempMax} </p>
            <p> Temperatura Minima: ${tempMin} </p>
        </div>
    </div>
    </div>     
    `
    containerWeather.innerHTML = outputTemplate;
 }
}






    