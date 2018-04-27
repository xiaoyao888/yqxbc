$(document).ready(function(){
  $(".art_content img").bind("click",function(){
	$('#imgModal').modal('show');
	$("#modal_img").html("<img src='"+this.src+"' width='100%' />");
  });
});