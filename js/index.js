$( document ).ready(function() {
    //Adjust slider height
    const windowHeight=$(window).height(),
    upperBarHeight=$('.upper-bar').innerHeight(),
    navBarHeight=$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - upperBarHeight - navBarHeight);
    $('.featured-work  ul li').on("click",function(){
      console.log($(this).data('class'))
      $(this).addClass('active').siblings().removeClass('active');
      if($(this).data('class')==='all'){
        $('.shuffle-images .col-sm').css('opacity',1);
      }else{
        $('.shuffle-images .col-sm').css('opacity',0.08);
        $($(this).data('class')).parent().css('opacity',1);
      }
    });
});
