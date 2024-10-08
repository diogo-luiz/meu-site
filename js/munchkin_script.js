let count = 1;
let countItem =1;
let countModify = 1;
let countAllied = 1;

//Level Counter
document.getElementById('decrease').onclick = function() {
    if (count === 1) {
        count = 1
    }
    else {
        count-=1;
        document.getElementById('countLabel').innerHTML = count;
    
    }
        
}

document.getElementById('reset').onclick = function() {
    count = 1
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increase').onclick = function() {
    if (count === 10){
        count = 10
        document.getElementById('countLabel').innerHTML = count;
    
    }
    else {
        count+=1;
        document.getElementById('countLabel').innerHTML = count;

    }
}

//Item Counter
document.getElementById('decreaseItem').onclick = function() {
    if (countItem === 0) {
        countItem = 0
    }
    else {
        countItem-=1;
        document.getElementById('countItem').innerHTML = countItem;
    
    }
        
}

document.getElementById('resetItem').onclick = function() {
    countItem = 0
    document.getElementById('countItem').innerHTML = countItem;
}

document.getElementById('increaseItem').onclick = function() {

    countItem+=1;
    document.getElementById('countItem').innerHTML = countItem;

}

//Modifier Counter
document.getElementById('decreaseModifier').onclick = function() {
    if (countModify === 0) {
        countModify = 0
    }
    else {
        countModify-=1;
        document.getElementById('countModifier').innerHTML = countModify;
    
    }
        
}

document.getElementById('resetModifier').onclick = function() {
    countModify = 0
    document.getElementById('countModifier').innerHTML = countModify;
}

document.getElementById('increaseModifier').onclick = function() {
    countModify+=1;
    document.getElementById('countModifier').innerHTML = countModify;

}

//allied counter
document.getElementById('decreaseAllied').onclick = function() {
    if (countAllied === 0) {
        countAllied = 0
    }
    else {
        countAllied-=1;
        document.getElementById('countAllied').innerHTML = countAllied;
    
    }
        
}

document.getElementById('resetAllied').onclick = function() {
    countAllied = 0
    document.getElementById('countAllied').innerHTML = countAllied;
}

document.getElementById('increaseAllied').onclick = function() {
    countAllied+=1;
    document.getElementById('countAllied').innerHTML = countAllied;

}


// Modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});