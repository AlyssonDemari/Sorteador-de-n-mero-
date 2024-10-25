function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    if(de > ate ){
        alert('Você digitou um número errado')
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Digite um número maior na opção "Até o número"</label>';
    } else {
        for (let i = 0; i < quantidade; i++){
    numero = obterNumeroAlatorio(de, ate);

    while (sorteados.includes(numero)){
        numero = obterNumeroAlatorio(de, ate);
    }
    sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Os números que foram sorteados são: ${sorteados} </label>`;

    alterarStatusBotao();
    }
}

reiniciar();


function obterNumeroAlatorio(min, max){
    return  Math.floor(Math.random() * (max - min + 1 )) + min;
}  

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        
    }


}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>';
    alterarStatusBotao();
    
}