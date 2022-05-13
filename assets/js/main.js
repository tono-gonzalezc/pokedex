

$(document).ready(function() {
    
//Ejercicio 1
    $('.btn').click(function() {
        $('.text').text('loading . . .');
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/posts",
        success: function(data) {
            $('.text').text(JSON.stringify(data));
            },
        error: function(data) {
            $('.text').text('API no funciona: '+data);
        },
        dataType: 'json',
        });
    }); //Fin ejercicio 1


// Ejercicio 2 miIndicador.cl

    $('#botonDolar').click(function() {
        $('mensajeDolar').text('cargando...');
        $('fechaDolar').text('cargando...');
        $.ajax({
            type:"GET",
            url:"https://mindicador.cl/api",
            success: function(data) {
                $('#mensajeDolar').text(JSON.stringify(data.dolar.valor));
                $('#fechaDolar').text(JSON.stringify(data.dolar.fecha));
                },
            error: function(data) {
                $('#mensajeDolar').text('API no funciona: '+data);
                },
            dataType: 'json',
            });
    }); //Fin Ejercicio 2 #botonDolar

}
);// Fin document.ready


