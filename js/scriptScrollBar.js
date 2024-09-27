$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var dh = $(document).height();
    var wh = $(window).height();
    
    var scrollPercent = (scroll / (dh - wh)) * wh;
    $('#progressbar').css('height',scrollPercent + 'px')
    
  });