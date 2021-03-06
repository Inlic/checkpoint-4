import { ProxyState } from "../AppState.js";


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function greeting(h){
  let greeting = ""
      if(h >= 5 && h < 12){
        greeting = "Morning"
      } else if(h >= 12 && h < 17){
        greeting = "Afternoon"
      } else if(h >= 17){
        greeting = "Evening"
      } else {
        greeting = "Night"
      }
  return greeting
}

let t

class ClockService {
  
  startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('greeting').innerHTML = `Good ${greeting(h)}`
    document.getElementById('clock-text').innerHTML =
    h + ":" + m + ":" + s;
    // @ts-ignore
    t = setTimeout(app.clockController.startTime, 500);
  }
  
  startTimeTwelveHour(){
    let today = new Date();
      let h = today.getHours();
      document.getElementById('greeting').innerHTML = `Good ${greeting(h)}`
      let meridiem = ""
      h > 12 ? meridiem = "PM" : meridiem = "AM"
      h > 12 ? h = h - 12 : h  
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('clock-text').innerHTML =`${h}:${m}:${s} ${meridiem}`
      // @ts-ignore
      t = setTimeout(app.clockController.startTimeTwelveHour, 500);
  }

  toggleTime() {
    clearTimeout(t)
    if(ProxyState._24Hclock){
      // @ts-ignore
      app.clockController.startTimeTwelveHour()
      ProxyState._24Hclock = false
    } else{
      // @ts-ignore
      app.clockController.startTime()
      ProxyState._24Hclock = true
    }
  }



}

const clockService = new ClockService();
export default clockService;