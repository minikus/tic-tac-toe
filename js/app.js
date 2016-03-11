console.log("test")
$(document).ready(function(){


var xPlayer = $('<img src="assets/bunchy.gif" style ="width: 50px">');
var oPlayer = $('<img src="assets/lama.gif" style="width: 50px" >');

var currentPlayer = xPlayer;

$("#chooseX").on("click", function(){
  currentPlayer = xPlayer;
});
$("#chooseO").on("click", function(){
  currentPlayer = oPlayer;
});

var winnerX = 0;
var winnerO= 0;
var inputValue = "";

var winner;
var player1Name = '';
var inputName = function(){
    swal({   title: "Welcome to Lama Tic-Tac-Toe",
          text: "Player 1:",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          animation: "slide-from-top",
          inputPlaceholder: "Enter Nickname"
        },
    function(inputValue){
      console.log('got', inputValue)
      $('.userName1').text(inputValue);
      if (inputValue === false)
      return false;
       if (inputValue === "") {
         swal.showInputError("You need to write something!");
         return false
       }
      swal("Nice!", "You wrote: " + inputValue, "success"); });

      return inputValue;
};

inputName();
$(".userName1").text(inputValue);



var mainWinner = function(){
  if (winnerX ===3 ){
    swal("Good job!", "Worm Lama has won 3 games!", "success")
  }
  if (winnerO ===3 ){
    swal("Good job!", "Galactic Lama has won 3 games!", "success")
  }
};

var checkWinner = function (){
  // debugger;
    if ($(".a.xClass, .b.xClass, .c.xClass").length === 3) {
        winner = xPlayer;
    }if ($(".d.xClass, .e.xClass, .f.xClass").length === 3) {
        winner = xPlayer;
    }if ($(".g.xClass, .h.xClass, .i.xClass").length ===3) {
        winner = xPlayer;
    }if ($(".a.xClass, .d.xClass, .g.xClass").length === 3) {
        winner = xPlayer;
    }if ($(".b.xClass, .e.xClass, .h.xClass").length ===3) {
        winner = xPlayer;
    }if ($(".c.xClass, .f.xClass, .i.xClass").length ===3) {
        winner = xPlayer;
    }if ($(".a.xClass, .e.xClass, .i.xClass").length ===3) {
        winner = xPlayer;
    }if ($(".g.xClass, .e.xClass, .c.xClass").length ===3) {
        winner = xPlayer;
    }if ($(".a.oClass, .b.oClass, .c.oClass").length === 3) {
       winner = oPlayer;
    }if ($(".d.oClass, .e.oClass, .f.oClass").length === 3) {
       winner = oPlayer;
    }if ($(".g.oClass, .h.oClass, .i.oClass").length === 3) {
       winner = oPlayer;
    }if ($(".a.oClass, .d.oClass, .g.oClass").length === 3) {
      winner = oPlayer;
    }if ($(".b.oClass, .e.oClass, .h.oClass").length === 3) {
      winner = oPlayer;
    }if ($(".c.oClass, .f.oClass, .i.oClass").length === 3) {
      winner = oPlayer;
    }if ($(".a.oClass, .e.oClass, .i.oClass").length === 3) {
       winner = oPlayer;
    }if ($(".g.oClass, .e.oClass .c.oClass").length === 3) {
       winner = oPlayer;
   }if (winner === undefined && $(".box img").length === 9){
      return sweetAlert({
	       title: "DRAW!",
         text: "Please Reset game!",
         type: "error"
                });
   }
   if(xPlayer === winner){
     winnerX += 1;
   }
   if(oPlayer === winner){
     winnerO += 1;
   }
   mainWinner();
   //$(".xTotals .score").text(winnerX);
   var $name1 = $('.userName1');
   $(".xTotals").html($name1).append(' : ').append(winnerX);
   $(".oTotals").html("Galactic Lama : ").append(winnerO);

  return winner;
};




$(".box").on("click", function(){
  if ( $(this).find('img').length > 0 ) {
    return false;
  } $(this).append(currentPlayer.clone()).addClass("symbols");
  if (currentPlayer === xPlayer) {
    $(this).addClass("xClass");
    currentPlayer = oPlayer;
    // $("h2.playerTurn").text().remove();
    $("h2.playerTurn").text("Next Player is:").append(oPlayer)

  } else {
    currentPlayer = xPlayer;
    $(this).addClass("oClass")
    // $("h2.playerTurn").text().remove();
    $("h2.playerTurn").text("Next Player is:").append(xPlayer);
  }
  var roundWinner = checkWinner();

  if ( roundWinner )  {
    // console.log("winner")
    // var $span = $("<span>").html( "Winner = " );
    // $span.append( checkWinner() );
    $(".winnerIs").html( "Winner = " ).append( roundWinner );
    $('.winnerDisplay').css("opacity", 1).addClass('animated bounceInUp');
    winner = false;

  }
});


$(".resetButton").on("click", function (){
$(".rows img, .playerTurn img, .winnerIs img").remove();
$(".box").removeClass("xClass oClass");
$(".winnerDisplay").css("opacity", 0).removeClass("animated bounceInUp");
// window.location = window.location
})

}); //end $(document.ready)






// anonymous functions
// $(".box").on("click", function (){});
//
//named functions
// var randomFunction = function (){};
// $(".box").on("click", randomFunction);
