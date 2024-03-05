var checkbox = document.getElementById("guerreiro");

if (checkbox.checked) {
    var valorCheckbox = checkbox.value;
    console.log("O checkbox está marcado com o valor: " + valorCheckbox);
} else {
    console.log("O checkbox não está marcado");
}