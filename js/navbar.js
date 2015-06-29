$(document).ready(function () {
	$('.navbar-toggle').css({height: $('.navbar-toggle').width()});
    
    $('#slide-nav.navbar .nav-container').append($('<div id="navbar-height-col"></div>'));
	/*var width;
	if(($(window).height()-$('header').height())>=$('#content').height()){width = $(window).width();}
	else {width = $(window).width() + 17;}
	if(width<768){
		$('#navbar-height-col').css({height: getHeight(), top: $('header').height()});
	}*/
   
    var toggler = '.navbar-toggle';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '500%'; // the menu inside the slide menu itself
    var slidewidth = '500%';
    var menuneg = '-500%';
    var slideneg = '-500%';

    $("#slide-nav").on("click", toggler, function (e) {
        var selected = $(this).hasClass('slide-active');
        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');
        $('#slide-nav, .navbar, body, .navbar-header').toggleClass('slide-active');
    });
	
    var selected = '#slidemenu, #slide-nav, body, .navbar, .navbar-header';
    $(window).on("resize", function () {
        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }
    });
});