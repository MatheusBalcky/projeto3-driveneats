
function selected(element){
    let isBorder = document.querySelector(".selected");
    if (isBorder !== null){
        isBorder.classList.remove("selected");
    }
    let result = element.classList.add("selected");
    
}







/*
estrutura usada para seleção

function toggleSuperman(element) {
    let isSuperman = document.querySelector(".superman");
    if (isSuperman !== null) {
      isSuperman.classList.remove("superman");
    }
    element.classList.toggle("superman");
}

  */