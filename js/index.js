let loader = $(".loader");
let main = $("main");
let ul = $(".links");
let button = $(".button-toggle");
let buyButton = $(".buy");
let buyModal = $(".buyBox");
buyButton.click(function(){
    buyModal.toggle();
})
buyModal.click(function(event){
    if(event.target.className != "modal"){
        buyModal.toggle()
    }
})
button.click(function(){
    ul.toggle()
})
setTimeout(() => {
    loader.fadeOut(500);
    main.fadeIn(500)
}, 500)
