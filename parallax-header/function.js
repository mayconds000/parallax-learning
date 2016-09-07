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

});
