// function Total() {
//     var tabela = document.getElementById('minhatabela');
//     var inputs = tabela.getElementsByTagName('input');

//     for (var i = 0; i < inputs.length; i++) {
//         console.log(inputs[i].value);
//     }
// }

function MyLoad() {
    const cols = document.getElementsByTagName("input");
    for (let index = 0; index < cols.length; index++) {
        cols[index].addEventListener('change', function(){
            var ls_nm = cols[index].name;
            Total(ls_nm);

        });
    }

    var inputs = document.querySelectorAll('#minhatabela input');
    var mensagem = document.getElementById('mensagem');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            verificarPreenchimento();
        });
    });

    function verificarPreenchimento() {
        var todosPreenchidos = true;
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                todosPreenchidos = false;
                return;
            }
        });
        var vencedor = document.getElementById('ganhador');
        var a = document.getElementById('col1_total').textContent;
        var b = document.getElementById('col2_total').textContent;
        var c = document.getElementById('col3_total').textContent;
        var d = document.getElementById('col4_total').textContent;
        var maior = Math.max(a,b,c,d)
        if (todosPreenchidos) {

            mensagem.showModal();
            vencedor.textContent = maior;
        }
    }
}

function Total(ls_nm) {
    var base = document.getElementsByName(ls_nm);
    var ls_sum = 0;

    for (var index = 0; index < base.length; index++) {
        var ls_base = base[index].value;

        ls_sum = +ls_sum + +ls_base;

    }

    document.getElementById(ls_nm + "_total").textContent = ls_sum;
}