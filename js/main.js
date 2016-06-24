$( document ).ready( function() {

	var activos = {}
	
	window.onload = function() {
		$('#imagenes').css('background-image', 'none');	
	}

	// Anima el sroll cuando hago  click en boton de que es
    $('#cta a').on( 'click', function(event){
		$('html, body').animate({
          scrollTop: $('#descripcion').offset().top
        }, 1000);
    	event.preventDefault();
    });

    // reemplazar imagen por una aleatoria cuando click
    $('#imagenes img').on('click', function(e) { 
    	$(this).animate({ 
    		transform: 'scaleX(0.00001)' 
    	}, 100, function(){
    		reemplazar( e.target );
    		$(this).animate({ 
    			transform: 'scaleX(1)' 
    		}, 100 )
    	});
    });

    // Reemplazar cada imagen por random en primera carga
    $('#imagenes img').each( function(){
    	reemplazar( $(this) );
    });

    // generar numeros aleatorios en rango determinado
    function getRandomArbitrary(min, max) {
		return Math.floor( Math.random() * (max - min) + min );
	}

	// Funcion para reemplazar por img aleatoria
	function reemplazar( e ){
		// guardar el numero de la imagen actual 

		// generar numero aleatorio 

		// quito el numero original de la lista de activos

		// revisar si numero aleatorio generado esta activo 

		// si no esta
		$(e).attr("src", "img/fotos/" + getRandomArbitrary( 1, 165 ) + ".jpg");

		// de lo contrario generar otro y volver a comparar
	}
});