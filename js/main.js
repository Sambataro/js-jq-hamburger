// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).


$(".header-right").click(function() {
 $(".hamburger-menu").toggleClass("active");
});

$(".close").click(function() {
 $(".hamburger-menu").hide();
});

// ora devo fare in modo che l'utente possa aprire e chiudere il menu all'infinito
