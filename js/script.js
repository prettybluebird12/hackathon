/* global $ */

$("#selection").change(function(){
  $("#lists div").hide(); 
  $("#" + this.value).show(); 
  $("#myBar").attr("value",0);
});

function loadchoices(){
  var json = localStorage.getItem("hurricanechoices");
  if (json){
     var loading = JSON.parse(json);
     setChecked(loading);
  }
};

function setChecked (choices){
  choices.forEach(function(element) {
  $("#"+ element.id).prop("checked", true);
});
}

function savechoices(){
  var x= getChecked();
  var json =JSON.stringify(x);
  localStorage.setItem("hurricanechoices",json)
}

function getChecked () {
    var checked =[];
    $("input:checked").each(function( index ) {
    var name = $(this).attr('name');
    var id = $(this).attr('id');
    var oh = {
      name:name, 
      id:id
    };
    checked.push(oh);
});
  return checked;
}

$('input[type="checkbox"]').change(function() {
  Totalboxes();
  TotalcheckedBoxes();
  var fraction=TotalcheckedBoxes()/Totalboxes();
  
  $("#myBar").attr("value",fraction);
  savechoices();
});
function Totalboxes(){
    return $('input[type="checkbox"]:visible').length;

}
 function TotalcheckedBoxes(){
var boxes= $('input[type="checkbox"]:checked:visible');
  return boxes.length;
  
}
loadchoices();
