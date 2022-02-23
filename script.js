function fetchData() {
    let districtName = dist_name.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${districtName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
        then(result => result.json()).then(data => populateValues(data)).
        catch(error => console.log("no data found"))
}
function populateValues(data) {

    let icon = data.weather[0].icon
    let Main = data.weather[0].main
    let Description = data.weather[0].description
    let Wind = data.wind.speed + "km / hr"
    let Humidity = data.main.humidity
    let Pressure = data.main.pressure
    let District = data.name
    let Temperature = data.main.temp + "\u00B0c"
    console.log(icon, Main, Description, Wind, Humidity, Pressure, District, Temperature);
    document.querySelector("#Main").innerHTML = Main

    document.querySelector("#Description").innerHTML = Description

    document.querySelector("#Wind").innerHTML = Wind

    document.querySelector("#Humidity").innerHTML = Humidity

    document.querySelector("#Pressure").innerHTML = Pressure

    document.querySelector("#District").innerHTML = District

    document.querySelector("#Temperature").innerHTML = Temperature


}