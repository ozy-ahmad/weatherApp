const URL =
  "//api.openweathermap.org/data/2.5/group?id=1642907,1642858,1214520,1636722,1631761&units=metric&appid=8f8620dd15199759e60e9778ff8178b7";
fetch(URL)
  .then((response) => {
    return response.json();
  })
  //1642911, (id jkt backup)
  .then((data) => {
    return data.list;
  })
  .then((data) => {
    console.log(data);

    //Jakarta
    const mainCityHead = document.querySelector("#mainCityHead-head");
    mainCityHead.innerHTML = data[0].name;
    const date = new Date();
    const mainCityDate = document.querySelector("#mainCityHead-date");
    mainCityDate.innerHTML = date;
    const mainCityIcon = document.querySelector("#mainCityHead-icon");
    mainCityIcon.src = `http://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`;
    mainCityIcon.alt = data[0].weather[0].description;
    const mainCityTemp = document.querySelector("#mainCityHead-temp");
    mainCityTemp.innerHTML = data[0].main.temp;
    const mainCityDesc = document.querySelector("#mainCityHead-desc");
    mainCityDesc.innerHTML = data[0].weather[0].main;

    //secondCity
    const secondCityHead = document.querySelector("#secondCity-head");
    secondCityHead.innerHTML = data[1].name;
    const secondCityIcon = document.querySelector("#secondCity-icon");
    secondCityIcon.src = `http://openweathermap.org/img/wn/${data[1].weather[0].icon}@2x.png`;
    secondCityIcon.alt = data[1].weather[0].description;
    const secondCityTemp = document.querySelector("#secondCity-temp");
    secondCityTemp.innerHTML = data[1].main.temp;
    const secondCityDesc = document.querySelector("#secondCity-desc");
    secondCityDesc.innerHTML = data[1].weather[0].main;

    //thirdCity
    const thirdCityHead = document.querySelector("#thirdCity-head");
    thirdCityHead.innerHTML = data[2].name;
    const thirdCityIcon = document.querySelector("#thirdCity-icon");
    thirdCityIcon.src = `http://openweathermap.org/img/wn/${data[2].weather[0].icon}@2x.png`;
    thirdCityIcon.alt = data[2].weather[0].description;
    const thirdCityTemp = document.querySelector("#thirdCity-temp");
    thirdCityTemp.innerHTML = data[2].main.temp;
    const thirdCityDesc = document.querySelector("#thirdCity-desc");
    thirdCityDesc.innerHTML = data[2].weather[0].main;

    //fourthCity
    const fourthCityHead = document.querySelector("#fourthCity-head");
    fourthCityHead.innerHTML = data[3].name;
    const fourthCityIcon = document.querySelector("#fourthCity-icon");
    fourthCityIcon.src = `http://openweathermap.org/img/wn/${data[3].weather[0].icon}@2x.png`;
    fourthCityIcon.alt = data[3].weather[0].description;
    const fourthCityTemp = document.querySelector("#fourthCity-temp");
    fourthCityTemp.innerHTML = data[3].main.temp;
    const fourthCityDesc = document.querySelector("#fourthCity-desc");
    fourthCityDesc.innerHTML = data[3].weather[0].main;

    //fifthCity
    const fifthCityHead = document.querySelector("#fifthCity-head");
    fifthCityHead.innerHTML = data[4].name;
    const fifthCityIcon = document.querySelector("#fifthCity-icon");
    fifthCityIcon.src = `http://openweathermap.org/img/wn/${data[4].weather[0].icon}@2x.png`;
    fifthCityIcon.alt = data[4].weather[0].description;
    const fifthCityTemp = document.querySelector("#fifthCity-temp");
    fifthCityTemp.innerHTML = data[4].main.temp;
    const fifthCityDesc = document.querySelector("#fifthCity-desc");
    fifthCityDesc.innerHTML = data[4].weather[0].main;
  });
