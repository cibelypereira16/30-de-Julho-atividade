// function cursor(event){
//     if(event.pageX >=1220 && event.pageY <=10){
//          alert(`Você realmente deseja sair desta página?`);
//         }
//     else{
//         console.log(`Eixo X ${event.pageX} e Eixo Y ${event.pageY}`);
//     }  
// }
// window.onmousemove = cursor;




let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let naoSou = document.querySelector("a");
let h3 = document.querySelector("h3");


if(localStorage.nome){
    caixaTexto.style.display = "none";
    botao.style.display = "none";
    h3.innerHTML = `Seja bem vindo ${localStorage.nome}`
    naoSou.innerHTML = `Você não é ${localStorage.nome} ?`
}else{
    function acessar(){
        localStorage.setItem('nome',caixaTexto.value);
        caixaTexto.style.display = "none";
        botao.style.display = "none";
        h3.innerHTML = `Seja bem vindo ${localStorage.nome}`
        naoSou.innerHTML = `Você não é ${localStorage.nome} ?`
        
    }
    botao.onclick = acessar;
}

function limpar(){
    localStorage.removeItem('nome');
}

naoSou.onclick = limpar;