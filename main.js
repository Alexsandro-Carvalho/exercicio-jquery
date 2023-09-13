$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const listaTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(novaTarefa).appendto('${listaTarefa}');
        $('ul').appendTo(novaTarefa);

        $("li").click(function () {
            $(this).addClass("riscado");
        });
        $('#nome-tarefa').val("");
        console.log('submit')
    })
})