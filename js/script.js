/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$("#selection").change(function(){
  $("#lists div").hide(); 
  console.log(this.value);
  $("#" + this.value).show(); 
});