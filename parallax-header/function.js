$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

$('.logo').css({
  'transform': 'translate(0px, '+ wScroll /2 +'%)'
});

$('.childs-bear').css({
  'transform': 'translate(0px, '+ wScroll / 8 +'%)'
});

$('.mother-bear').css({
  'transform' : 'translate(0px, '+ wScroll / 8 +'%)'
});

if(wScroll > $('#pics').offset().top - ($(window).height() / 1.2)){
  $('#pics figure').each(function(i){
    //i = index of array of elements
    setTimeout(function(){
        $('#pics figure').eq(i).addClass('is-showing');
    },150 * (i+1));
  });
}

if(wScroll > $('.large-window').offset().top - $(window).height()){
  $('.large-window').css({'background-position': 'center '+ (wScroll - $('.large-window').offset().top) +'px'});

  var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

  $('.window-tint').css({'opacity': opacity});
}

if(wScroll > $('.blog').offset().top - $(window).height()){

  var offset = Math.min(0, wScroll - $('.blog').offset().top + $(window).height() - 350);
  console.log($('.blog').offset().top);

  $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2)+'px)'});
  $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2)+'px)'});

}

});
