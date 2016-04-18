$(document).ready(function(){
  $('#dentistry-list-item').click(function(){
    $('#dentistry-sub-list').slideToggle();
  });
  $('#laboratory-list-item').click(function(){
    $('#laboratory-sub-list').slideToggle();
  });
  $('#surgery-list-item').click(function(){
    $('#surgery-sub-list').slideToggle();
  });
  $('#fertility-list-item').click(function(){
    $('#fertility-sub-list').slideToggle();
  });
  $('#internal-list-item').click(function(){
    $('#internal-sub-list').slideToggle();
  });

  $('.hidden').fadeIn(1000).removeClass('hidden');
});
