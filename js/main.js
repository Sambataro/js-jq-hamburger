// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

$(".header-right").click(function() {
 $(".hamburger-menu").show("active");
});

$(".close").click(function() {
 $(".hamburger-menu").hide("active");
});



// prima versione che ho fatto dell'esercizio
// $(".header-right").click(function() {
//  $(".hamburger-menu").toggleClass("active");
// });
//
// $(".close").click(function() {
//  $(".hamburger-menu").toggleClass("active");
// });
