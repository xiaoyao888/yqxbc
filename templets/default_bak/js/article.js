function getStr(num){
	var chars = ['0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','_','{','}','[',']','?','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var res = "";
	for(var i = 0; i < 15+num ; i ++) {
	    var id = Math.ceil(Math.random()*35);
	    res += chars[id];
	}
	return res;
}
$(document).ready(function (){
	
	var lisnr_div = $(".lisnr li").children('div');
	var lisnr_p = $(".lisnr li").children('p');
	for(var x =0;x<lisnr_p.length;x++){		
		$(lisnr_p[x]).append("<span style='color:#fff'><a style='color:#fff' onmouseover='this.style.color=#fff' href='http://www.win10os.com'>win10系统之家</a>"+getStr(x) +"win10系统之家</span>");
	}
	for(var j =0;j<lisnr_div.length-1;j++){
		$(lisnr_div[j]).append("<span style='color:#fff'><a style='color:#fff' onmouseover='this.style.color=#fff' href='http://www.win10os.com'>win10系统之家</a>"+getStr(j) +"win10系统之家</span>");
	}
});

