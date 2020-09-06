import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  //TODO Flesh out this method toggle for C and F
  toggleTemp() {
    ProxyState.weather.displayF ? ProxyState.weather.displayF = false : ProxyState.weather.displayF = true
    ProxyState.weather = ProxyState.weather  
  }
  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;