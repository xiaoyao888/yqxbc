  function searchKey(){
    var keyword = $("#keyword").val();
    if(keyword.length<2){
      $('#myModal').modal('show');     
      return;
    }else{
      $("#searchFrm").submit();
    }
  }
  function handleAnim(clazz,x) {
  	var className = $('#'+clazz)[0].className+" ";
    $('.'+clazz).removeClass().addClass(className + x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();      
      $(this).addClass(className);
    });
    
  };
  $(document).ready(function(){
  	handleAnim("title-site-name","swing");
  	handleAnim("title-site-domain","fadeInUp");
  	handleAnim("title-site-memo","fadeInUp");
  	handleAnim("title-site-article-count","fadeInUp");
    handleAnim("searchFrm","zoomIn");
    handleAnim("searchFrm","zoomIn");
  })

  $(".nav-custom li a").on("mouseover",function(){
    navAnimate(this,"swing");
  });
  
  function navAnimate(obj,x){
    var agoClass = $(obj).prop("class");
    $(obj).removeClass().addClass(agoClass + x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();    
      $(this).addClass(agoClass);  
    });
  }
