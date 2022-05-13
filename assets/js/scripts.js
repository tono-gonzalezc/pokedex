$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault(); //eso dado que la etiqueta form no tiene un atributo action
        let valueInput = $("#pokemonInput").val(); //creo la variable para almacenar el valor de input
        $.ajax({ //Jquery que llama a Ajax
            url:"https://pokeapi.co/api/v2/pokemon/" + valueInput, 
            success: function(data){ 
                let nombre= data.name; 
                let imagen= data.sprites.front_default;
                let peso= data.weight;

                //Imagen y nombre
                $("#pokeInfo").html(`
                <div class="text-center">
                    <h3>${nombre}</h3>
                    <img src="${imagen}">
                    <h6>Peso: ${peso}</h6>
                </div>
                `);
                
                //Grafico
                
                let estadisticas = [];
                data.stats.forEach(function (s){
                    estadisticas.push({
                        label: s.stat.name,
                        y: s.base_stat,
                    });
                }); // fin funcion que obtiene los eje x e y

                let config = {
                    animationEnabled: true,
                    title: {
                        text: "Estadisticas"
                    },
                    axisY: {
                        text: "Valor"
                    },
                    axisX: {
                        title: "Estadistica",
                    },
                    data: [
                        {
                            type: "column",
                            dataPoints: estadisticas,                            
                        }
                    ],
                }; //fin variable config

                let chart = new CanvasJS.Chart("chartContainer", config);
                chart.render();

            },// fin success
        });

    });
});

