//返回顶部
document.write("<DIV style='display:none;' id=gotop class='gotop'><IMG border=0 src='/templets/default/images/gotop.gif' alt='返回顶部' width='48' height='48'></DIV>");
var obj = document.getElementById("gotop");
function getScrollTop(num) {
	return document.documentElement.scrollTop + document.body.scrollTop;
}
function setScrollTop(value) {
	if (document.documentElement.scrollTop) {
		document.documentElement.scrollTop = value;
	} else {
		document.body.scrollTop = value;
	}
}
window.onscroll = function() {
	getScrollTop() > 0?obj.style.display = "":obj.style.display = "none";
}
obj.onclick = function() {
	var goTop = setInterval(scrollMove, 10);
	function scrollMove() {
		setScrollTop(getScrollTop() / 1.8);
		if (getScrollTop() < 1)clearInterval(goTop);
	}
}