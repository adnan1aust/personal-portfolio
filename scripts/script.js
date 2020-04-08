$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('.about').position().top && $("#html").width() == 0){
        $("#html").animate({width:"90%"}, 1000);
        $("#css").animate({width:"70%"}, 1000);
        $("#js").animate({width:"80%"}, 1000);
        $("#php").animate({width:"65%"}, 1000);
        $("#java").animate({width:"80%"}, 1000);     
    }
})