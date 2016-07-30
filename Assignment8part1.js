
//JavaScript

$(document).ready(function() {
    
    $(".myButton").click(function(event) {
    alert("You clicked button 1!");
    
});
    
    $(".myButton1").bind("click", function(event) {
    alert("You clicked button 2!");
    
});
     $(".myButton2").on("click", function(event) {
    alert("You clicked button 3!");
    
});
     $(".myButton3, .myButton4").on("click", function(event) {
    alert("You clicked button 4!");
    
});
   /* $("#myDiv").css({"width": "400px", "height": "400px", "background-color": "lightgrey"})
               .on({
                     mouseenter: function() {alert("Hovered over the div!");},
                     mouseleave: function() {alert("The mouse left the div!");},
                     click: function() {alert("You clicked on the div!");}
    });*/
 $("#myDiv").css({"width": "400px", "height": "400px", "background-color": "lightgrey"})
 $("span").on({
                     mouseenter: function() {alert("Hovered over the div!");},
                     mouseleave: function() {alert("The mouse left the div!");},
                     click: function() {alert("You clicked on the div!");}
    });
    
$("a").click(function(event) {
    event.preventDefault();
    $("a")
    .css("color", "red")
    alert(event.target);
    
});
    $("#myDiv1").css("background-color", "lightgrey");
    $( window ).resize(function() {
  $("#myDiv1" ).prepend( "<div>" + "Screen width " + $( window ).width() + " Screen height  " + $( window ).height() + "</div>" );
});
    
    $("#focusGrey").focus(
    function(){
        $("#focusGrey").css("background-color", "grey");
    });
    
    $("#focusGrey").blur(
    function(){
        $(this).css({'background-color' : "white"});
    });
    
    $("#myForm").click(function(){
    

    if( $("form input").val().length == 0)
        {
            $("form input").addClass("redborder");
             alert("Please fill in the fields indicated by red border");
        } else{
            $(":input").removeClass("redborder");
        }
    });

   
});