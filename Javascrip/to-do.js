// $(document).ready(function(){   //Double click function
//   $("li").dblclick(function(){

// $(this).css({
//   color : "grey",
//   textDecoration: "line-through"

//
//   });
// });


//Check off specific to-dos

// $("h1").click(function() {
//   $("h1").css("color", "red");
// });

var x = 5;
$("ul").on("click", "li", function() { //inside ul use li have this event.
  if (x === 6) {
    $(this).css({
      color: "#f79071",
      textDecoration: "none"

    });
    x--;

  } else {
    $(this).css({
      color: "grey",
      textDecoration: "line-through"
    });
    x++;
  }
});

//Removing list items using span

$("ul").on("click", "span", function(event) { //inside ul use span to have this event.
  $(this).parent().fadeOut(1000, function() { //this here refers to the "span" element
    $(this).remove(); //this here refers to the "li" element
  });
  event.stopPropagation; //stop other elements to be triggered by the same event as span
});



//append new to-dos
$("input[type='text']").keypress(function() {

  if (event.which === 13) {



    var newItem = $(this).val(); //this = $("input")
    $(this).val('');
    console.log(newItem);
    $("ul").append("<li><span><i class='fas fa-times-circle'></i></span>" + newItem + "</li>");
  }
});




$(".fa-edit").click(function() {
  $("input").fadeToggle(600);
});
