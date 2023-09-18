$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const listaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(novaTarefa).appendTo(`${listaTarefa}`);
        $('ul').append(novaTarefa);

        $("li").click(function () {
            $(this).addClass("riscado");
        });
        $('#nome-tarefa').val("");
        console.log('submit')
    })
})