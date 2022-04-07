let plate;   // guardar informação do prato escolhido
let valuePlate; // guardar valor do prato escolhido

function plateSelected(element){

    let isSelected = document.querySelector(".selected-plate");      // verifica se tem prato selecionado
    let isCheckOn = document.querySelector(".checkOn");             // verifica se tem prato selecionado
    if (isSelected !== null && isCheckOn !== null){          // condição para q se houver prato selecionado remova o atual
        isSelected.classList.remove("selected-plate");
        isCheckOn.classList.remove("checkOn");
        isCheckOn.classList.add("hidden");
    }
    element.classList.add("selected-plate");
    element.querySelector(".checkImg").classList.add("checkOn"); 
    element.querySelector(".checkImg").classList.remove("hidden");

    plate = element.querySelector(".description-item > h3").innerHTML;
    valuePlate = element.querySelector(".description-item > h4").innerHTML;
    valuePlate = converterNumero(valuePlate);

    isAllSelected(); // verifica se todos estão selecionados para habilitar o botão verde
}

let drink;   // guardar informação do prato escolhido
let valueDrink; // guardar valor do prato escolhido
function drinkSelected(element){
    let isSelected = document.querySelector(".selected-drink"); //alternativa para não selecionar a mesma div da primeira lista é usar o seletor hierárquico
    let isCheckOn = document.querySelector(".checkOnDrink"); //vai ver se tem alguém que foi selecionado
    if (isSelected !== null && isCheckOn !== null){
        isSelected.classList.remove("selected-drink");
        isCheckOn.classList.remove("checkOnDrink");
        isCheckOn.classList.add("hidden");
    }
    element.classList.add("selected-drink");
    element.querySelector(".checkImg").classList.add("checkOnDrink"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("hidden");

    drink = element.querySelector(".description-item > h3").innerHTML;
    valueDrink = element.querySelector(".description-item > h4").innerHTML;
    valueDrink = converterNumero(valueDrink);

    isAllSelected();
}

let dessert; // guardar sobremesa
let valueDessert;  // guardar valor sobremesa
function dessertSelected(element){
    
    let isSelected = document.querySelector(".selected-dessert");
    let isCheckOn = document.querySelector(".checkOnDessert");  //vai ver se tem alguém que foi selecionado
    if (isSelected !== null){                                    // se tiver alguém selecionado remove a seleção e add o hidden nele
        isSelected.classList.remove("selected-dessert");
        isCheckOn.classList.remove("checkOnDessert");
        isCheckOn.classList.add("hidden");
    }
    element.classList.add("selected-dessert");
    element.querySelector(".checkImg").classList.add("checkOnDessert"); // o element atual recebe a seleção e remove o hidden
    element.querySelector(".checkImg").classList.remove("hidden");

    dessert = element.querySelector(".description-item > h3").innerHTML;
    valueDessert = element.querySelector(".description-item > h4").innerHTML;
    valueDessert = converterNumero(valueDessert);

    isAllSelected();
}
function isAllSelected (){ // função que verifica as variáveis SE estão preenchidas para poder finalizar pedido
  if(plate && dessert && drink){     
    document.querySelector(".gray-button").classList.add("hidden");   // remove o botão cinza 
    document.querySelector(".finish-order").classList.remove("hidden");  // aparecer o botão verde
  }
}
function converterNumero(preco){    // função para converter as string precos em Number
  preco = preco.replace("R$ ", "").replace(",", ".");
  return Number(preco);
}

let totalValue = 0;
function finishOrder(){  // função para finalizar pedido
  totalValue = (valuePlate + valueDrink + valueDessert).toFixed(2); // somar a conta do pedido
  document.querySelector(".confirm-canva").classList.remove("hidden"); // display tela de confirmação do pedido

  document.querySelector(".plate-selected").innerHTML = plate; // add o prato selecionado na confirmação
  document.querySelector(".value-plate").innerHTML = `R$ ${valuePlate.toFixed(2)}`; // add o valor do prato na confirmação

  document.querySelector(".drink-selected").innerHTML = drink;
  document.querySelector(".value-drink").innerHTML = `R$ ${valueDrink.toFixed(2)}`;

  document.querySelector(".dessert-selected").innerHTML = dessert;
  document.querySelector(".value-dessert").innerHTML = `R$ ${valueDessert.toFixed(2)}`;

  document.querySelector(".totalValue").innerHTML = `R$ ${totalValue}`;  // valor total do pedido na tela de confirmação
}

function sendOrder(){     // função de envio do pedido e captura de dados do cliente
  let name = prompt("Seu nome? Digite abaixo!");
  let adress = prompt("Qual é o seu endereço? Digite abaixo!");
  let payment = prompt("Forma de pagamento? (Cartão, Dinheiro ou Pix) Digite Abaixo!");

  let messageWpp =`Olá, gostaria de fazer o pedido:\n- Prato: ${plate}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nCliente: ${name}\nEndereço: ${adress}\nForma de pagamento: ${payment}\nTotal: ${totalValue}`;

  window.open("https://wa.me/5581995464901?text=" + encodeURIComponent(messageWpp));
}

function calloffOrder(){  // cancelar pedido
  document.querySelector(".confirm-canva").classList.add("hidden");
}
