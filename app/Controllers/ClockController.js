import clockService from "../Services/ClockService.js"

export default class ClockController {

  startTime() {
    try {
      clockService.startTime()
    } catch (error) {
      console.error(error)
    }
  }
  
  startTimeTwelveHour(){
    try {
      clockService.startTimeTwelveHour()
    } catch (error) {
      console.error(error)
    }
  }

  toggleTime(){
    try {
      clockService.toggleTime()
    } catch (error) {
      console.error(error)
    }
  }

}