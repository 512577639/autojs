auto();
toast("好戏开始");
var a = 0
for (var i = 1; i > 0;) {
var b =id("mib_custom_dialog_progress_bar_text_view").findOne(3000);
if(b != null){
  toast("更新列表中.....");
  sleep(2000); 
}else{
  var b =className("android.widget.FrameLayout").depth(1).findOne(3000);
  if(b != null){
    toast("关闭弹出菜单");
    sleep(1000); 
    back();
    sleep(2000); 
  }else{
    var b =id("mib_layout_title_text_view").findOne(3000);
    if(b != null){
      var b =id("mib_activity_main_mining_start_text_view").findOne(3000);
      if(b != null){
        a = 0
        sleep(10000);
      }else{
         a++
         toast("选择高速");
         id("mib_activity_main_speed_high_radio_button").findOne().click();
         sleep(2000);
         var c = device.height;
         toast("点击开始开采" + c);
         click(10, c-10);
         sleep(5000);
      }
    }else{
      toast("打开APP.....");
      launch("io.mibcoin.mibmining");
      a = 0
      sleep(10000);
    }
  }
}
if(a > 3){
  toast("关闭重新开始");
  openAppSetting(getPackageName("MIB 挖矿"));
  text("强制停止").findOne().click();
  sleep(5000);
  text("强制停止").click();
  sleep(5000);
  back();
}
};