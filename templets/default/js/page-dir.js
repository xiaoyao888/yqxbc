function CreateArticleCategory(){   
	var fatherulID="#rootul";
	var fatherLevel=0;
	var rootID="#rootul"
	var oneID="#";
	var twoID="#";
	
	var childElements = $(".art_content")[0].children;
   $.each(childElements,function(index, element) {
		var tagName=$(this).get(0).tagName;	
		if(tagName.substr(0,1)!="H"){ return true;}
		if(tagName.substr(1,1)>3){return true;}//只收录三级标题
		
		var hID="h-"+index.toString();
		$(this).attr("id",hID);	
		
		var contentH=$(this).html();
		var level=parseInt(tagName.substr(1,1));
		var liid="li"+index.toString();	
      var fontWeight = '500px';
      if(level==1){
        fontWeight = '900px';
      }else if(level==2){
        fontWeight ='700px';
      }else{
        fontWeight ='500px';
      }
		var object_a="<a data='"+hID+"' href='javascript:;'  >"+contentH+"</a>";
		var object_li="<li  class='li"+tagName.substr(1,1)+"' style='font-weight:"+fontWeight+"' id='"+liid+"'></li>"
		
					
		//在父级ul下加入li 在li下加入a 和 ul
		$(fatherulID).append(object_li);
		$("#"+liid).append(object_a);		
	});
}
/*function CreateArticleCategory(){   
	var fatherulID="#rootul";
	var fatherLevel=0;
	var rootID="#rootul"
	var oneID="#";
	var twoID="#";
	
	var childElements = $(".art_content")[0].children;
   $.each(childElements,function(index, element) {
		var tagName=$(this).get(0).tagName;	
		if(tagName.substr(0,1)!="H"){ return true;}
		if(tagName.substr(1,1)>3){return true;}//只收录前三级标题
		
		var hID="h-"+index.toString();
		$(this).attr("id",hID);	
		
		var contentH=$(this).html();
		var level=parseInt(tagName.substr(1,1));
		var liid="li"+index.toString();
		var ulid="ul"+index.toString();
		var object_a="<a href='#"+hID+"'>"+contentH+"</a>";
		var object_li="<li  class='li"+tagName.substr(1,1)+"' id='"+liid+"'></li>"
		var object_ul="<ul  class='nav ul-none' id='"+ulid+"'></ul>";
		//获得父级ul的ID是啥 并更新oneID
		if(level==1){
			fatherulID=rootID;
			oneID="#"+ulid;
		}else if(level==2){
			fatherulID=oneID;
			twoID="#"+ulid;
		}else if(level==3){
			fatherulID=twoID;
		}		
		//在父级ul下加入li 在li下加入a 和 ul
		$(fatherulID).append(object_li);
		$("#"+liid).append(object_a);
		$("#"+liid).append(object_ul);
	});
}
*/
$(document).ready(function(){
	//生成博文内部目录
	CreateArticleCategory();
	$('#rootul').on("click","li", function(){
		var flag = $(this).children("a").attr("data");//.replace("#","");
		$('html,body').animate({scrollTop:$('#'+flag).offset().top}, 800);
	});
});//end ready function
