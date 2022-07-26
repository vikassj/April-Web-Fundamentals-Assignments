const form=document.querySelector('form');
const search=document.getElementById('search');
const weather=document.getElementById('weather')
const API_KEY='3265874a2c77ae4a04bb96236a642d2f';

const getWeather =async(city)=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response= await fetch(URL);
    const data= await response.json();
    showweather(data);
};

const showweather=(data)=>{
    console.log(data);
    if(data.cod=='404'){
        weather.innerHTML=`<h2>City not found</h2>`;
        return;
    }
    weather.innerHTML=`
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather" height="120px" width="140px"/>
    </div>
    <div>
        <h2>${data.main.temp} °C</h2>
        <h3>${data.weather[0].main}</h3>
    </div>
                    `;
}

form.addEventListener('submit', function(event){
    // console.log(search.value);
    getWeather(search.value);
    event.preventDefault();
})
