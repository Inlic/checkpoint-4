export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.floor(data.main.temp - 273.15)
    this.farenheit = Math.floor(data.main.temp * (9/5) - 459.67)
    this.displayF = data.displayF || true
    this.iconURL = 'https://http.cat/404'
    if(data.weather && data.weather[0] && data.weather[0].icon){
      this.iconURL = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png' 
    }
  }

  get Template(){
    return `
    <div class="card">
      <div class="card-body" onclick="app.weatherController.toggleTemp()">
        <h5>Temperature in ${this.displayF ? "&degF: "+ this.farenheit : "&degC: "+ this.celsius}</h5> <img src='${this.iconURL}'>
      </div>
    </div>
    `
  }

}