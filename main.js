$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const listaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>').text(listaTarefa);
        

        //$(novaTarefa).append(`${listaTarefa}`);
        $('ul').append(novaTarefa);

        $('#nome-tarefa').val("");
    });
        //$('li').on('click', 'li', function () {
        //    $(this).addClass(".linhas");
        //});
        //$('#nome-tarefa').val("");
        
    //})
    //const texto = document.getElementById("seuElemento");
    //texto.style.borderBottom = "1px dashed black";
    $('ul').on('click', 'li', function (){
        $(this).toggleClass("linhas");
    })
})
