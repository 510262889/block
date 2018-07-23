export default class DrawUtil{

  /**
   * 绘画图片
   * 
   * @param imageUrl 图片路径
   * @param x 图片在画布上的横向位置
   * @param y 图片在画布上的纵向位置
   * @param width 图片宽度
   * @param heigth 图片高度
   * @param callback 绘画完成后的回调
   * 
   * @return 图片对象
   */
  static drawImage( imageUrl , x , y , width , heigth , callback ){
    if ( !callback || typeof func == 'function' ) callback = function(){};
    var image = wx.createImage();
    image.src = imageUrl;
    image.onload = function () {
      ctx.drawImage();
      ctx.drawImage(image , x , y , width , heigth );
      callback();
    }
    return image;
  }

}