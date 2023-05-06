//http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e

let city=document.getElementById('city')
let country=document.getElementById('country')
let temprature = document.getElementById('temprature')
let user_input=document.getElementById('user_input')

let  checkTemp = async() =>{
    let cityValue=user_input.value
    if(cityValue=="")
    {
        alert('Please Enter City Name Before Search')
    }
    else{
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)                                                                                                                        
        let data=await response.json();
        city.textContent=data.name;
        country.textContent=data.sys.country;
        temperature.textContent=data.main.temp;
    }
    
}

//for fetching the API.give API link inside template braces
//we make it as await because it will take some time to get the fetched va;lue from API