console.log("test")
$(document).ready(function(){


// 1 2 3 = 6
// 4 5 6 = 15
// 7 8 9 = 24
// diagonal 1 = 15
// diagonal 2 = 15



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

var winner;

var checkWinner = function (){
  // Basically, we need to figure out all the combinations
    // Horizontal - .a, .b, .c - .d, .e, .f - .g, .h, .i
     if ($(".a.xClass, .b.xClass, .c.xClass").length === 3) {
      return  winner = xPlayer;
    }if ($(".d.xClass, .e.xClass, .f.xClass").length === 3) {
      return  winner = xPlayer;
    }if ($(".g.xClass, .h.xClass, .i.xClass").length ===3) {
      return  winner = xPlayer;
    }if ($(".a.xClass, .e.xClass, .i.xClass").length ===3) {
      return  winner = xPlayer;
    }if ($(".g.xClass, .e.xClass, .c.xClass").length ===3) {
      return  winner = xPlayer;
    }if ($(".a.oClass, .b.oClass, .c.oClass").length === 3) {
     return  winner = oPlayer;
   }if ($(".d.oClass, .e.oClass, .f.oClass").length === 3) {
     return  winner = oPlayer;
   }if ($(".g.oClass, .h.oClass, .i.oClass").length === 3) {
     return  winner = oPlayer;
   }if ($(".a.oClass, .e.oClass, .i.oClass").length === 3) {
     return  winner = oPlayer;
   }if ($(".g.oClass, .e.oClass .c.oClass").length === 3) {
     return  winner = oPlayer;
   }
  return winner;
};

$(".box").on("click", function(){
  if ( $(this).find('img').length > 0 ) {
    return false;
  }

  $(this).append(currentPlayer.clone()).addClass("symbols");
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
  if ( checkWinner())  {
    // console.log("winner")
    // var $span = $("<span>").html( "Winner = " );
    // $span.append( checkWinner() );
    $(".winnerIs").html( "Winner = " ).append( checkWinner() );
    $('.winnerDisplay').css("opacity", 1).addClass('animated bounceInUp');
  }
});



  // $('button').on('click', move);

//
// var row1 = ["","",""],
// var row2 = ["","",""],
// var row3 = ["","",""],
//
// row1[i]= currentPlayer
//
// $(".box").onclick : function(){
//    if ($(this) (currentPlayer).push
//   }
//
//  }











}); //end $(document.ready)



// anonymous functions
// $(".box").on("click", function (){});
//
//named functions
// var randomFunction = function (){};
// $(".box").on("click", randomFunction);
