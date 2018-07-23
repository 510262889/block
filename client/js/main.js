import {global} from "./global.js"
import DrawUtil from "js/util/drawutil.js"

let ctx = wx.createCanvas().getContext('2d');
export default class Main{
  constructor(){
    this.restart();
  }

  /**
   * 重启
   */
  restart(){
    // 1.初始化全局参数
    this.initParams();
    // 2.初始化画布
    this.initCanvas();
  }

  /**
   * 参数初始化
   */
  initParams(){

  }

  /**
   * 初始化画布
   */
  initCanvas(){
    // 背景初始化
    var img_background = wx.createImage();
    img_background.src = "images/background.jpg";
    img_background.onload = function () {
      ctx.drawImage();
      ctx.drawImage(img_background, 0, 0, global.SCREEN_WIDTH, global.SCREEN_HEIGHT);

      // 开始按钮初始化
      var playbutton = wx.createImage();
      playbutton.src = "images/playbutton.png";
      playbutton.onload = function () {
        ctx.drawImage(playbutton, (global.SCREEN_WIDTH / 2) - 113, (global.SCREEN_HEIGHT / 2) - 111, 226, 223);
      }
    }
  }
}