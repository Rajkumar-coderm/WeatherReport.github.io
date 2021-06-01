
const weatherApi = {
    key:"a074d0846511c8a70cfce6ba4ad06510",
    baseurl:"https://api.openweathermap.org/data/2.5/weather"
}

const serverinbox=document.getElementById("input-box");
serverinbox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        console.log(serverinbox.value);
        getweatherreport(serverinbox.value);
        document.querySelector('.weather_body').style.display="block";

    }
});

function getweatherreport(city){
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(sowweatherreport);
}

function sowweatherreport(weather){
    console.log(weather)
    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;
    let tempreture=document.getElementById('temp');
    tempreture.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
    let minmaxtemp=document.getElementById('min-max');
    minmaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min)--${Math.ceil(weather.main.temp_min)}&deg;C(max)`
    let weathertype=document.getElementById("weather");
    weathertype.innerText=`${weather.weather[0].main}`
    let datea=document.getElementById('date');
    let Todaydate=new Date();
    datea.innerText=datamanage(Todaydate);
}

function datamanage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let year=dateArg.getFullYear();
    let monts=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date}${monts}(${day}),${year}`;
}