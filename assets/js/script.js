$(document).ready(function(){

  if($(document).width() <= 992){
    $('.main-wrapper').addClass('fixed-head');
  } else{
    $('.main-wrapper').removeClass('fixed-head');
  }

  $('#navToggle').on('click', function(event){
    $('#navbarNav').fadeToggle('slow');

    $('body').one('click',function() {
      $('#navbarNav').fadeToggle('slow');
    });

    event.stopPropagation();
  })

})
