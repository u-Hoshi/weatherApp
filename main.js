const Icon = document.createElement("img")
const iconimg = document.getElementById("iconImg")
iconimg.appendChild(Icon)


function clickbtn() {
    var elements = document.getElementsByName("weather")
    var result;
    for (var i = 0; i < elements.length; i++){
        if (elements[i].checked) {
            result = elements[i].value;
            const selectCityName = ['tokyo', 'hawai', 'Manchester']
            var targetCityName = selectCityName[result]
            let appId = 'd3190da356fdd087c303dfde7c5d6480'
            const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;"
            
            // 座標用
            // const selectCityName2 = [
            //     ["kandamyouzin", "35.7020186", "139.7657056"],
            //     ["kyoutoUzi", 35.2926336, 136.633759]
            // ];
            // var targetCityName2 = selectCityName2[result][1]
            // var targetCityName3 = selectCityName2[result][2]
            // const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${targetCityName2}&lon=${targetCityName3}&appid=${appId}&units=metric`
            // 座標用end
            
            
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', requestUrl);
    
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            ShowTodayWeather(xhr.responseText);
        }
    }
    
    function ShowTodayWeather(response) {
        let obj = JSON.parse(response)
        let weather = obj.weather[0].description;
        let city = obj.name;
        let temp = obj.main.temp;
        let humi = obj.main.humidity;
        let icon = obj.weather[0].icon;
    
        console.log("現在" + city + "の天気は" + weather);
        console.log(`気温は ${temp} 度です`);
        console.log(icon)
    
        const Tem = document.getElementById("tem");
        const Hum = document.getElementById("hum");
    
        Tem.innerHTML = temp
        Hum.innerHTML = humi
        Icon.setAttribute('src','http://openweathermap.org/img/w/'+icon+'.png')   
    }
            break;
        }
    }
}




