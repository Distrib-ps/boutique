function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
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
function deco(){
  delete_cookie("DiscordToken")
}
function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function checkProfile(url){
  if (url.includes("profile")){
    let pp1 = document.getElementById("pp2")
      pp1.srcset = "https://cdn.discordapp.com/avatars/"+UserData.id+"/"+UserData.avatar
      let name = document.getElementById("profilename")
      name.innerHTML = UserData.username
  }
}
const socket = io("https://marketpala.glitch.me")