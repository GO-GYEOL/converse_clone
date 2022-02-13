$(document).ready(function(){
  $(".nav-box > li").click(function(){
    var thisIndex = $(this).index();
    
    if( $(".nav-left > .content").eq(thisIndex).hasClass("active") ){
      $(".nav-2-depth-wrap").removeClass("active");
      $(".nav-left > .content").removeClass("active");
    } else {
      $(".nav-2-depth-wrap").addClass("active");
      $(".nav-left > .content").eq(thisIndex).addClass("active");
      $(".nav-left > .content").eq(thisIndex).siblings().removeClass("active");
    }
  });
  
  $(".nav-right").click(function(){
    $(".nav-2-depth-wrap").removeClass("active");
    $(".nav-left > .content").removeClass("active");

  });
  
  
});