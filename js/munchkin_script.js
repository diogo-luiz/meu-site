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
    if (countItem === 1) {
        countItem = 1
    }
    else {
        countItem-=1;
        document.getElementById('countItem').innerHTML = countItem;
    
    }
        
}

document.getElementById('resetItem').onclick = function() {
    countItem = 1
    document.getElementById('countItem').innerHTML = countItem;
}

document.getElementById('increaseItem').onclick = function() {

    countItem+=1;
    document.getElementById('countItem').innerHTML = countItem;

}

//Modifier Counter
document.getElementById('decreaseModifier').onclick = function() {
    if (countModify === 1) {
        countModify = 1
    }
    else {
        countModify-=1;
        document.getElementById('countModifier').innerHTML = countModify;
    
    }
        
}

document.getElementById('resetModifier').onclick = function() {
    countModify = 1
    document.getElementById('countModifier').innerHTML = countModify;
}

document.getElementById('increaseModifier').onclick = function() {
    countModify+=1;
    document.getElementById('countModifier').innerHTML = countModify;

}

//allied counter
document.getElementById('decreaseAllied').onclick = function() {
    if (countAllied === 1) {
        countAllied = 1
    }
    else {
        countAllied-=1;
        document.getElementById('countAllied').innerHTML = countAllied;
    
    }
        
}

document.getElementById('resetAllied').onclick = function() {
    countAllied = 1
    document.getElementById('countAllied').innerHTML = countAllied;
}

document.getElementById('increaseAllied').onclick = function() {
    countAllied+=1;
    document.getElementById('countAllied').innerHTML = countAllied;

}