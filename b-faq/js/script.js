$(document).ready(function(){

  $('.b-list_faq .b-answer').toggle(
    function(){
      var dh = $(this).parent('.item').find('.b-text').innerHeight()+15;
      $(this).parent('.item').find('.hidden').animate({'height':dh},500);
      $(this).addClass('active');
    },
     function(){
      var title = $(this);
      $(this).parent('.item').find('.hidden').animate({'height':0},500,function() {title.removeClass('active');});
  });

});
