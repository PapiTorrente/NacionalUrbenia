	const navegacion = document.querySelector('.navegacion');
    const menuToggle = document.querySelector('.menu-hamburguesa');
    const listaMenu = document.querySelector('.listaMenu');

    menuToggle.addEventListener('click', () => {
		navegacion.classList.toggle('modificado');
        listaMenu.classList.toggle('activo');
		menuToggle.classList.toggle('presionado');
    });