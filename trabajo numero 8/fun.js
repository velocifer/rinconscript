
  function mostrar(caja) {

  	var nombre = document.getElementById(caja)
  	nombre.style.display='block'

  }

  function juego() 
  {

  	var comida = ['mariscos','humitas','pescado frito','mariscal']
  	var nro = prompt('ingresa un numero entre 0 y 4')
  	var codigo = prompt('ingresa el menu del dia : humitas,mariscos,pescado frito ,mariscal')
  	var ganador = document.queryselector('#ganador_juego')
  	
     }

 
  	if(codigo==comida[nro]) 
    {
  		alert('¡Ganaste!')
  		

  		ganador.style.display=block
  } 


  else {
  	alert('perdiste...')




    ganador.style.display='none'

  }


 alert('Bienvenid@ a Rincon Hogareño ')
