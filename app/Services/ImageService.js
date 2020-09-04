//TODO create methods to retrieve data and save to the State
import Image from "../models/Image.js"
import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";

class ImageService {

async getImg(){
  let res = await api.get('images')
  console.log("images service at your service")
  console.log(res.data.url)
  ProxyState.splashimg = new Image(res.data.url)
}
 }

const imageService = new ImageService();
export default imageService;