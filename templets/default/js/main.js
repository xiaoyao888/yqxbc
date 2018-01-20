function searchKey(){
  var keyword = $("#keyword").val();  
  if(keyword!=null &&keyword.length<2){
    $('#myModal').modal('show');
    $(function () { $('#myModal').modal({
        keyboard: true
     })});
    setTimeout("closeSearch()",2000);
  }else{
    $("#searchFrm").submit();
  }
}
function closeSearch(){
  $('#myModal').modal('hide');        
}
function GetRandomNum(Min,Max){   
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
}   
 
/*var num = 0;
$(document).ready(function(){
  $("body").mousemove(function(event){
    var pageX = event.pageX;
    var pageY = event.pageY;
    var arr = $(".panel-custom");
    num++;  
    var box = "<div id='ball"+num+"' style='position:absolute;top:"+(pageY+10)+"px;left:"+(pageX+10)+"px;background:#2186D3;border-radius:5px;width:10px;height:10px;'><div>";
    $("body").append(box);    
    $("#ball"+num).animate({width:"0px",height:"0px"},1000,function(){       
       $("#ball"+num).remove();
    });    
  });
});  */
function changeFont(cName){
    //获取para的字体大小
    var thisEle = $(".art_content").css("font-size"); 
    //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
    var textFontSize = parseFloat(thisEle , 10);
    //javascript自带方法
    var unit = thisEle.slice(-2); //获取单位           
    if(cName == "bigger"){
      if(textFontSize<26)
          textFontSize += 2;

    }else if(cName == "smaller"){
      if(textFontSize>12)
          textFontSize -= 2;
    }
    //设置para的字体大小
    $(".art_content").css("font-size",  textFontSize + unit );
}