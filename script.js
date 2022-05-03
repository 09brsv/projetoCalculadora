const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');


function insertSinal(valor){
    resultado.innerHTML = valor;
}

function insert(valor){
    resultado.innerHTML += valor;
}
function apagaTudo(){
    resultado.innerHTML = ' ';
}

function deletar(){
    if(resultado.textContent){
       let campoNumeros = document.getElementById('result').innerHTML
        resultado.innerHTML = campoNumeros.substring(0, campoNumeros.length - 1)
    }
}

function result(){
    if(resultado.textContent != 'erro'){
    document.getElementById('result').innerHTML = eval(resultado.innerHTML)
    }
}