/**
 * 方块父类
 */
export default class Block{
   constructor(){
     // 方块的最大宽度
     this.maxWidth = 4;
     // 方块的最大高度
     this.height = 4;
     // x方向位置
     this.x = 0;
     // y方向位置
     this.y = 0;
     // 颜色
     this.color = "#cccccc";
     // 旋转状态
     this.rotate = 0;
     // 方块实体
     this.block = [];
   }

   up(){

   }

   right(){

   }

   down(){

   }

   left(){

   }
}