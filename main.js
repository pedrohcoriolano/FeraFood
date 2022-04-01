var salgados = document.querySelector('#salgados')
var quantidade__salgados = document.querySelector('#quantidade__salgados')
var escolha__salgados = ''
var valor__salgados = ''
var botao__salgados = document.querySelector('#botao__salgados')

var carne = 3.50
var frango = 3.50
var camarao = 4.50

var valor__total__salgado = 0


botao__salgados.disabled = true

salgados.onchange = function () {

    if(salgados.value == 'nulo') {
        botao__salgados.disabled = true
    } else {
        botao__salgados.disabled = false
    }

}


botao__salgados.onclick = function () {

    escolha__salgados = salgados.value

    switch(escolha__salgados) {
        case 'coxinha de carne':
            valor__total__salgado = carne * quantidade__salgados.value
            valor__salgados = `R$ ${carne} X ${quantidade__salgados.value} unidade = R$ ${valor__total__salgado}`
            break
        case 'coxinha de frango':
            valor__total__salgado = frango * quantidade__salgados.value
            valor__salgados = `R$ ${frango} X ${quantidade__salgados.value} unidade = R$ ${valor__total__salgado}`
            break
        case 'coxinha de camarao':
            valor__total__salgado = camarao * quantidade__salgados.value
            valor__salgados = `R$ ${camarao} X ${quantidade__salgados.value} unidade = R$ ${valor__total__salgado}`
            break
        default:
            alert('Erro')
            break
    }
}

var lanches = document.querySelector('#lanches')
var quantidade__lanches = document.querySelector('#quantidade__lanches')
var escolha__lanches = ''
var valor__lanches = ''
var botao__laches = document.querySelector('#botao__lanches')

botao__lanches.disabled = true

var x_calabresa = 10
var misto_quente = 7
var hot_dog = 8

var valor__total__lanches = 0

lanches.onchange = function () {

    if(lanches.value == 'nulo') {
        botao__lanches.disabled = true
    } else {
        botao__lanches.disabled = false
    }

}

botao__lanches.onclick = function () {

    escolha__lanches = lanches.value

    switch(escolha__lanches) {
        case 'x-calabresa':
            valor__total__lanches = x_calabresa * quantidade__lanches.value
            valor__lanches = `R$ ${x_calabresa} X ${quantidade__lanches.value} unidade = R$ ${valor__total__lanches}`
            break
        case 'misto quente':
            valor__total__lanches = misto_quente * quantidade__lanches.value
            valor__lanches = `R$ ${misto_quente} X ${quantidade__lanches.value} unidade = R$ ${valor__total__lanches}`
            break
        case 'hot dog':
            valor__total__lanches = hot_dog * quantidade__lanches.value
            valor__lanches = `R$ ${hot_dog} X ${quantidade__lanches.value} unidade = R$ ${valor__total__lanches}`
            break
        default:
            alert('Erro')
            break
    }
}

var bebidas = document.querySelector('#bebidas')
var quantidade__bebidas = document.querySelector('#quantidade__bebidas')
var escolha__bebidas = ''
var valor__bebidas = ''
var botao__bebidas = document.querySelector('#botao__bebidas')

botao__bebidas.disabled = true

var agua = 2.50
var coca_cola = 6
var fanta_laranja = 6
var valor__total__bebidas = 0

bebidas.onchange = function () {

    if(bebidas.value == 'nulo') {
        botao__bebidas.disabled = true
    } else {
        botao__bebidas.disabled = false
    }
}

botao__bebidas.onclick = function () {

    escolha__bebidas = bebidas.value

    switch(escolha__bebidas) {
        case 'agua':
            valor__total__bebidas = agua * quantidade__bebidas.value
            valor__bebidas = `R$ ${agua} X ${quantidade__bebidas.value} unidade = R$ ${valor__total__bebidas}`
            break
        case 'coca cola':
            valor__total__bebidas = coca_cola * quantidade__bebidas.value
            valor__bebidas = `R$ ${coca_cola} X ${quantidade__bebidas.value} unidade = R$ ${valor__total__bebidas}`
            break
        case 'fanta laranja':
            valor__total__bebidas = fanta_laranja * quantidade__bebidas.value
            valor__bebidas = `R$ ${fanta_laranja} X ${quantidade__bebidas.value} unidade = R$ ${valor__total__bebidas}`
            break
        default:
            alert('Erro')
            break
    }
}

var doces = document.querySelector('#doces')
var quantidade__doces = document.querySelector('#quantidade__doces')
var escolha__doces = ''
var valor__doces = ''
var botao__doces = document.querySelector('#botao__doces')

botao__doces.disabled = true

var limao = 10
var morango = 11
var ninho = 12
var valor__total__doces = 0

doces.onchange = function () {

    if(doces.value == 'nulo') {
        botao__doces.disabled = true
    } else {
        botao__doces.disabled = false
    }
}

botao__doces.onclick = function () {

    escolha__doces = doces.value

    switch(escolha__doces) {
        case 'torta de limao':
            valor__total__doces = limao * quantidade__doces.value
            valor__doces = `R$ ${limao} X ${quantidade__doces.value} unidade = R$ ${valor__total__doces}`
            break
        case 'torta de morango':
            valor__total__doces = morango * quantidade__doces.value
            valor__doces = `R$ ${morango} X ${quantidade__doces.value} unidade = R$ ${valor__total__doces}`
            break
        case 'torta de ninho':
            valor__total__doces = ninho * quantidade__doces.value
            valor__doces = `R$ ${ninho} X ${quantidade__doces.value} unidade = R$ ${valor__total__doces}`
            break
        default:
            alert('Erro')
            break
    }
}

var carrinho = document.querySelector('#carrinho')
var menu = document.querySelector('#menu')

var botao__carrinho = document.querySelector('#botao__carrinho')

var itens = document.querySelector('#itens')
var valor__total = document.querySelector('#valor__total')
var calculo = 0
var desconto = 0

carrinho.style.display = 'none'

botao__carrinho.onclick = function () {
    menu.style.display = 'none'
    carrinho.style.display = 'flex'

    itens.innerText = `Os itens escolhidos e seus preços foram:\n${escolha__salgados} ${valor__salgados}\n${escolha__lanches} ${valor__lanches}\n${escolha__bebidas} ${valor__bebidas}\n${escolha__doces} ${valor__doces}`

    calculo = valor__total__bebidas + valor__total__doces + valor__total__lanches + valor__total__salgado

    

    valor__total.innerText = `O valor total da sua compra foi: R$ ${calculo}`

    desconto = calculo - (calculo * 0.2)
}

var entrada__cupom = document.querySelector('#entrada__cupom')
var botao__aplicar = document.querySelector('#botao__aplicar')
var preco__desconto = document.querySelector('#preco__desconto')

botao__aplicar.onclick = function () {
    if(entrada__cupom.value == 'descontin'){

        alert('Cupom aplicado!')
        preco__desconto.innerText = `O valor antigo era R$ ${calculo} com desconto fica R$ ${desconto}`

    } else {
        alert('Cupom inválido!')
    }
}
