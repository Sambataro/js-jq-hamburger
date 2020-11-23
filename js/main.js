// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).


// prima versione esercizio con toggleClass

$(".header-right").click(function() {
 $(".hamburger-menu").toggleClass("active");
});

$(".close").click(function() {
 $(".hamburger-menu").toggleClass("active");
});
// prima versione esercizio--------------------//


// seconda versione esercizio con show e hide

// $(".header-right").click(function() {
//  $(".hamburger-menu").show();
// });
//
// $(".close").click(function() {
//  $(".hamburger-menu").hide();
// });

// seconda versione esercizio--------------------//

// terza versione esercizio con fadein e fadeout

// $(".header-right").click(function() {
//  $(".hamburger-menu").fadeIn(2000);
// });
//
// $(".close").click(function() {
//  $(".hamburger-menu").fadeOut(1000);
// });

// terza versione esercizio--------------------//
