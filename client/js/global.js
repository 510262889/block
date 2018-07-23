export var global = {
  SCREEN_WIDTH:0,
  SCREEN_HEIGHT:0
}

initScreenSize();

function initScreenSize(){
  wx.getSystemInfo({
    success: function (params) {
      global.STATUSBAR_HEIGHT = params.statusBarHeight;
      global.STATUSBAR_WIDTH = params.statusBarWidth;
      global.SCREEN_HEIGHT = params.screenHeight;
      global.SCREEN_WIDTH = params.screenWidth
    },
    fail: function (params) {
      console.log("获取屏幕尺寸失败。。。")
    },
    complete: function (params) {
      //console.log("完成")
    }
  });
}



