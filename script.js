let botao_nao = document.getElementById('nao');
let botao_sim = document.getElementById('sim');
let pergunta = document.getElementsByClassName('pgt')[0];
let altura = window.innerHeight;
let largura = window.innerWidth;
let contador_nao = 0;
let contador_sim = 0;
botao_nao.addEventListener('click', function () {
    botao_nao.style.position = 'absolute';
    botao_nao.style.top = Math.random() * altura + "px";
    botao_nao.style.left = Math.random() * largura + "px";
    contador_nao++;

    if (contador_nao > 4) {
        pergunta.innerHTML = "Já decidiu me amar?";

        botao_sim.addEventListener('click', function () {
            contador_sim++;
            pergunta.innerHTML = "Tem certeza?";
            console.log(contador_sim)
        })
    }
});