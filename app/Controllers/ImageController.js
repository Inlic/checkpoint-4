import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

function _drawImg(){
  let img = ProxyState.splashimg.img
  document.getElementById("splash-image").style.backgroundImage = `url(${img})`
  document.getElementById("splash-image").style.backgroundSize = "cover"
}
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController { 
  constructor(){
    this.getImg()
    ProxyState.on("splashimg",_drawImg)
  }

  getImg(){
    imageService.getImg()
  }

}