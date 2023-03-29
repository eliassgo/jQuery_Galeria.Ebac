$(document).ready(function() { //quando o documento estiver pronto execute a função
    $('header button').click(function () { //ao clicar no 'header button', o formulário form irá descer slideDown
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() { // ao clicar no #botão-cancelar o formulário form irá subir slideup
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { //ao clicar no button do formulário executar essa funcção
        e.preventeDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //criando constante com id do html
        const novoItem = $('<li style="display: none"></li>'); //criando constante
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);//colocar img dentro do novo item
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real"
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);//colocando dentro do novo item
        $(novoItem).appendTo('ul');//colocando novo item dentro do ul
        $(novoItem).fadeIn();
        $('endereço-imagem-nova').val('')
    })
})
//JQUERY funciona através do () e do $, $()entre parênteses fica o seletor


