var boton = document.querySelector('.boton');

boton.addEventListener('click', function(evento){
	var SeccionOculta = document.querySelector('.hidden')
	SeccionOculta.classList.remove('hidden')
	boton.classList.add('hidden')
})
