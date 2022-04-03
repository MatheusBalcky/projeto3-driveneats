let plate;   // guardar informação do prato escolhido
let valuePlate; // guardar valor do prato escolhido

function plateSelected(element){
    let isSelected = document.querySelector(".selected-plate"); // verifica se tem prato selecionado
    if (isSelected !== null){                                 // condição para q se houver prato selecionado remova o atual
        isSelected.classList.remove("selected-plate");
    }
    element.classList.add("selected-plate");                  // por fim o element selecionado tem sua seleção
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOn");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOn");
      isCheckOn.classList.add("hidden");
    }
    element.querySelector(".checkImg").classList.add("checkOn"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("hidden");
    // checkImg aparecer desaparecer
    let isChicken = element.classList.contains("chicken");
    let isFish = element.classList.contains("fish");
    let isMeat = element.classList.contains("meat");
    let isPig =element.classList.contains("pig");

    if (isChicken === true){
      plate = "Frango Ying Yang";
      valuePlate = 14.90;
    } else if (isFish === true){
      plate = "Peixe Frito";
      valuePlate = 12.90;
    } else if (isMeat === true){
      plate = "Carne ao molho";
      valuePlate = 16.90;
    } else if (isPig === true){
      plate = "Carne de porco";
      valuePlate = 13.90;
    } else{
      plate = "Vázio";
      valuePlate = 0;
    }
    if(plate && dessert && drink){
      document.querySelector(".gray-button").classList.add("hidden");
      document.querySelector(".finish-order").classList.remove("hidden");
    }
}

let drink;   // guardar informação do prato escolhido
let valueDrink; // guardar valor do prato escolhido

function drinkSelected(element){
    let isSelected = document.querySelector(".selected-drink"); //alternativa para não selecionar a mesma div da primeira lista é usar o seletor hierárquico
    if (isSelected !== null){
        isSelected.classList.remove("selected-drink");
    }
    element.classList.add("selected-drink");
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOnDrink");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOnDrink");
      isCheckOn.classList.add("hidden");
    }
    element.querySelector(".checkImg").classList.add("checkOnDrink"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("hidden");
    // checkImg aparecer desaparecer
    let isCoke = element.classList.contains("coke");
    let isJuice = element.classList.contains("juice");
    let isNescau = element.classList.contains("nescau");
    let isShake =element.classList.contains("shake");

    if (isCoke === true){
      drink = "Coquinha gelada";
      valueDrink = 4.90;
    } else if (isJuice === true){
      drink = "Suco gelado";
      valueDrink = 3.90;
    } else if (isNescau === true){
      drink = "Nescau";
      valueDrink = 99.90;
    } else if (isShake === true){
      drink = "Milkshake";
      valueDrink = 10.90;
    } else{
      drink = "Vázio";
      valueDrink = 0;
    }
    if(plate && dessert && drink){
      document.querySelector(".gray-button").classList.add("hidden");
      document.querySelector(".finish-order").classList.remove("hidden");
    }
}

let dessert; 
let valueDessert; 

function dessertSelected(element){
    let isSelected = document.querySelector(".selected-dessert");
    if (isSelected !== null){
        isSelected.classList.remove("selected-dessert");
    }
    element.classList.add("selected-dessert");
    // checkImg aparecer desaparecer
    let isCheckOn = document.querySelector(".checkOnDessert");  //vai ver se tem alguém que foi selecionado
    if (isCheckOn !== null){                         // se tiver alguém selecionado remove a seleção e add o hidden nele
      isCheckOn.classList.remove("checkOnDessert");
      isCheckOn.classList.add("hidden");
    }
    element.querySelector(".checkImg").classList.add("checkOnDessert"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("hidden");
    // checkImg aparecer desaparecer
    let isPudding = element.classList.contains("pudding");
    let isIcecream = element.classList.contains("icecream");
    let isPie = element.classList.contains("pie");
    let isChocolat = element.classList.contains("chocolat");

    if (isPudding === true){
      dessert = "Pudim";
      valueDessert = 7.90;
    } else if (isIcecream === true){
      dessert = "Sorvete";
      valueDessert = 4.90;
    } else if (isPie === true){
      dessert = "Torta";
      valueDessert = 5.90;
    } else if (isChocolat === true){
      dessert = "Chocolate";
      valueDessert = 6.90;
    } else{
      dessert = "Vázio";
      valueDessert = 0;
    }
    if(plate && dessert && drink){
      document.querySelector(".gray-button").classList.add("hidden");
      document.querySelector(".finish-order").classList.remove("hidden");
    }
}
let totalValue = 0;
function finishOrder(){
  totalValue = valuePlate + valueDrink + valueDessert; // somar a conta do pedido
  document.querySelector(".confirm-canva").classList.remove("hidden");

  document.querySelector(".plate-selected").innerHTML = plate;
  document.querySelector(".value-plate").innerHTML = valuePlate.toFixed(2);

  document.querySelector(".drink-selected").innerHTML = drink;
  document.querySelector(".value-drink").innerHTML = valueDrink.toFixed(2);

  document.querySelector(".dessert-selected").innerHTML = dessert;
  document.querySelector(".value-dessert").innerHTML = valueDessert.toFixed(2);

  document.querySelector(".totalValue").innerHTML = totalValue.toFixed(2);
}

function sendOrder(){
  let name = prompt("Seu nome? digite abaixo!");
  let adress = prompt("Qual é o seu endereço? digite abaixo:");
  let payment = prompt("Forma de pagamento? (cartão, dinheiro ou pix)");

  let messageWpp = "Olá, gostaria de fazer o pedido:" + "\n" + "- Prato: " + plate + "\n" + "- Bebida: " + drink + "\n" + "- Sobremesa: " + dessert + "\n" + "Cliente: " + name + "\n" + "Endereço: " + adress + "\n" + "Forma de pagamento: " + payment + "\n" + "Total: " + totalValue.toFixed(2) ;

  window.open("https://wa.me/5581995464901?text=" + encodeURIComponent(messageWpp));
}

function calloffOrder(){
  document.querySelector(".confirm-canva").classList.add("hidden");
}