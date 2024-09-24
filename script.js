let btgerarRobo = document.querySelector('button')

btgerarRobo.addEventListener('click', gerarRobo)

function gerarRobo() {
    const inputTxt = document.querySelector('#txString')
    const valor = inputTxt.value
    const inputAltura = document.querySelector('#txAltura')
    const altura = inputAltura.value 
    const inputLargura = document.querySelector('#txLargura')
    const largura = inputLargura.value 


    let imgRobo = document.querySelector('img')
    imgRobo.src = 'https://robohash.org/' +valor + "?size=" + altura + "x" + largura 

}  
