let url = new URL(window.location.href)
let categorie = url.searchParams.get("categorie");
let shop = document.getElementsByClassName("shop")[0];
var itemcommande;
var prix;
var UserData;
var quantitee;
function nbrandom(length) {
   var resultat           = '';
   var ch       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var chlength = ch.length;
   for ( var i = 0; i < length; i++ ) {
      resultat += ch.charAt(Math.floor(Math.random() * chlength));
   }
   return resultat;
}
function createItem(displayname, imageSRC, nom, description, buyable, max){
    let box = document.createElement("div");
    box.className = "item";
    shop.appendChild(box);

    let header = document.createElement("div");
    header.className = "header";
    box.appendChild(header)

    if(buyable == true){
        let image = document.createElement("img");
        image.src = imageSRC;
        header.appendChild(image)
    }

    let text = document.createElement("div");
    text.className = "text";
    box.appendChild(text)

    let nomItem = document.createElement("h3");
    nomItem.innerHTML = nom;
    text.appendChild(nomItem)

    let descriptionItem = document.createElement("p");
    descriptionItem.innerHTML = description;
    text.appendChild(descriptionItem)

    let buyBox = document.createElement("div");
    buyBox.className = "button";
    text.appendChild(buyBox);

    if(buyable == true){
        let inputRange = document.createElement("input")
        inputRange.type = "range";
        inputRange.className = displayname
        inputRange.max = max;
        buyBox.appendChild(inputRange)

        let inputValue = document.createElement("span");
        inputValue.className = "range-value"
        inputValue.innerHTML = "0 séléctionné(s)";
        buyBox.appendChild(inputValue)

        let buttonBuyBox = document.createElement("a");
        buttonBuyBox.className = "buy";
        buttonBuyBox.setAttribute("item", displayname)
        buttonBuyBox.innerHTML = "Acheter";
        buyBox.appendChild(buttonBuyBox)
    }

}
let price = {
    "ps4": {
        "Ps4 Noir": 299.99,
        "Ps4 Blanche": 299.99,
        "Manette PS4 Noir": 62.99,
        "Manette PS4 Blanche": 62.99,

    },
    "switch": {
        "Nitendo Switch": 299.99,
        "Nintendo Switch Lite Jaune": 199.99,
        "Nintendo Switch Joy-Con": 64.90,
        "Manette Nintendo Switch Pro": 59.99,  
    },
    "xbox": {
        "Xbox One X": 477.99,
        "Microsoft Xbox One S": 230.99,
        "Manette Xbox One": 54.99,
    },
    "jeux": {
       "God of War": 19.99,
       "Zelda Breath of the Wild": 52.99,
       "Red Dead Redemption 2": 69.90,
    }
}
let max = {
    "ps4": {
        "Ps4 Noir": 1,
        "Ps4 Blanche": 1,
	},
	"switch": {
		
	},
	"xbox": {
		
		},
	"jeux": {
		
}
}
switch(categorie){
    case "ps4":
        createItem("Ps4 Noir", "https://media1.picsearch.com/is?DojiIiHVeqOBiztK0bW38G1kaoRYuOsOZ-_gRvpGTiM&height=191", "Ps4 Noir", "Une console pour la détente", true, 5);
        createItem("Ps4 Blanche", "https://static.fnac-static.com/multimedia/Images/FR/MDM/a7/e3/84/8709031/1540-1/tsp20191227071007/Console-Sony-PS4-Slim-500-Go-Blanc.jpg", "Ps4 Blanche", "Une console pour la détente", true, 5);
        createItem("Manette PS4 Noir", "https://static.fnac-static.com/multimedia/Images/FR/NR/39/76/7f/8353337/1540-1/tsp20160908115017/Manette-PS4-Sony-Dual-Shock-4-Noir-V2.jpg", "Manette PS4 Noir", "Besoin d'une manette ?", true, 5);
        createItem("Manette PS4 Blanche", "https://static.fnac-static.com/multimedia/Images/FR/NR/6a/8f/82/8556394/1540-1/tsp20180712094139/Manette-PS4-Sony-Dual-Shock-4-Blanc-glacier-V2.jpg", "Manette PS4 Blanche", "Besoin d'une manette ?", true, 5);
        break;
    case "switch":
        createItem("Nitendo Switch", "https://static.fnac-static.com/multimedia/Images/FR/MDM/ba/de/bc/12377786/1540-1/tsp20200114090705/Console-Nintendo-Switch-avec-une-paire-de-Joy-Con-Gris.jpg", "Nitendo Switch", "Une console pour la détente", true, 5);
        createItem("Nintendo Switch Lite Jaune", "https://static.fnac-static.com/multimedia/Images/FR/NR/87/01/ac/11272583/1540-1/tsp20190924130455/Console-portable-Nintendo-Switch-Lite-Jaune.jpg", "Nintendo Switch Lite Jaune", "Une console pour la détente", true, 5);
        createItem("Nintendo Switch Joy-Con", "https://static.fnac-static.com/multimedia/Images/FR/NR/f9/49/82/8538617/1540-1/tsp20180712093336/Paire-de-manettes-Nintendo-Switch-Joy-Con-gauche-bleue-neon-et-droite-rouge-neon.jpg", "Nintendo Switch Joy-Con", "Besoin d'une manette ?", true, 5);
        createItem("Manette Nintendo Switch Pro", "https://static.fnac-static.com/multimedia/Images/FR/NR/fc/49/82/8538620/1540-1/tsp20190207131011/Manette-Nintendo-Switch-Pro.jpg", "Manette Nintendo Switch Pro", "Besoin d'une manette ?", true, 5);
        break;
    case "xbox":
        createItem("Xbox One X", "https://static.fnac-static.com/multimedia/Images/FR/MDM/86/d3/4d/5100422/1540-1/tsp20191126111103/Pack-Console-Microsoft-Xbox-One-X-1-To-Noir.jpg", "Xbox One X", "Une console pour la détente", true, 5);
        createItem("Microsoft Xbox One S", "https://static.fnac-static.com/multimedia/Images/FR/MDM/40/ab/87/8891200/1540-1/tsp20191210191443/Console-Microsoft-Xbox-One-S-1-To-2-Manettes.jpg", "Microsoft Xbox One S", "Une console pour la détente", true, 5);
        createItem("Manette Xbox One", "https://static.fnac-static.com/multimedia/Images/FR/NR/b5/e8/7f/8382645/1540-1/tsp20161117150643/Manette-Xbox-One-Sans-fil-Noir.jpg", "Manette Xbox One", "Besoin d'une manette ?", true, 5);
        break;
    case "jeux":
        createItem("God of War", "https://media5.picsearch.com/is?etbCr5tRFgUIh199-efwMl9asutoh41Y5a-O3imaA-4&height=178", "God of War", "Jeu vidéo", true, 7);
        createItem("Zelda Breath of the Wild", "https://media3.picsearch.com/is?UGqLDru10YzzMxQuluYO1sy2XspvRL_C6FPNGUmJ-do&height=140", "Zelda Breath of the Wild", "Jeu Vidéo", true, 7);
        createItem("Red Dead Redemption 2", "https://s1.gaming-cdn.com/images/products/5679/orig/red-dead-redemption-2-standard-edition-cover.jpg", "Red Dead Redemption 2", "Jeu Vidéo", true, 7);
        break;

}
let input = document.querySelectorAll("input");
let quantity = new Map();
input.forEach((element) => {
    if(element.type == "range"){
        element.addEventListener("change", () => {
            quantity = new Map();
            quantity.set(element.className, price[categorie][element.className]*element.value)
            quantity.set("quantity", element.value)
            element.parentElement.children[1].innerHTML = element.value + " séléctionné(s)";
        })
    }
})
let buybutton = $(".buy");
let buymodal = $(".buyBox");
let modal = $(".buyBox .modal");
var commande = {}
buybutton.click(function(event){
  var quantitee = quantity.get(Array.from(quantity.keys())[1]);
  if (quantitee <= 0) return alert("Veuillez entrer une quantité supérieure à 0.");
  if (!quantitee) return;
    buymodal.toggle();
    var prix = quantity.get(Array.from(quantity.keys())[0]);

    $(".buyBox .modal .text p").html("Acheter " + quantitee + " " + quantity.entries().next().value[0] + " pour " + prix +"e ?")
})
var micheline = $(".modal")
micheline.click(function(event){
    if(event.target.className != "modal"){
    Swal.fire({// Ont a utilisé --> https://lipis.github.io/bootstrap-sweetalert/
  icon: 'success',
  title: 'Achat(s) Validé !',
  text: 'Merci de votre confiance ! En espérent que nos services soit toujours au top ! Maintenant pour finaliser l\'achat, merci de suivre les consignes suivantes: 1- Envoyez un mail à delhay70@gmail.com en donnant le code d\'achat suivant:  '+nbrandom(10)+'  2- Dès que vous avez envoyé l\'email, vous devez patienter jusqu\'à 24 heures.Pour toutes autre question merci de vous rediriger sur l\'espace d\'aide.',
  footer: '<a href="../index.html">Revenir à l\'acceuil.</a>',
      timer: 1000000
})
    } else {
      console.log("")
        }
})