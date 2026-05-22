//supostamente randomiza a cor de fundo

document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = "#${Math.floor(Math.random() * 16777215).toString(16)}"; //erro ta aqui que nao processa como f-string
});

