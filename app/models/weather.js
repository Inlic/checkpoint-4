export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.floor(data.main.temp - 273.15)
    this.farenheit = Math.floor(data.main.temp * (9/5) - 459.67)
    this.displayF = true
    this.iconURL = 'https://http.cat/404'
    if(data.weather && data.weather[0] && data.weather[0].icon){
      this.iconURL = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png' 
    }
  }


  //TODO on click toggle C and F temperature
  get Template(){
    return `
    <div class="card">
      <div class="card-body">
        Temperature in ${this.displayF ? "F: "+ this.farenheit : "C: "+ this.celsius} <img src='${this.iconURL}'>
      </div>
    </div>
    `
  }

}