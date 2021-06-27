$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('.about').position().top && $("#html").width() == 0){
        $("#html").animate({width:"100%"}, 1000);
        $("#css").animate({width:"100%"}, 1000);
        $("#js").animate({width:"100%"}, 1000);
        $("#php").animate({width:"100%"}, 1000);
        $("#java").animate({width:"100%"}, 1000);
        $("#salesforce-admin").animate({ width: "100%" }, 1000);
        $("#salesforce-developer").animate({width:"100%"}, 1000);
        $("#ui-ux").animate({width:"100%"}, 1000);
    }
})
