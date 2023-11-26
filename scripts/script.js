$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
            placeholder:'(41) 0000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            mensagem: 'A mensagem é obrigatoria'
        },
        submitHandler: function(form) {
            form.submit();
        },
        invalidHandler: function(e, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos no formulário`);
            }
        }
    })

});