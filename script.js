$(document).ready(function()
{
   $('#menu').click(function(){
    $(this).toggleClass('fa-times')
    $('nav').toggleClass('toggle')
   });

   $(window).on('scrollload',function(){
    $('#menu').removeClass('fa-times');
    $('nav').removeClass('toggle')
   })
});