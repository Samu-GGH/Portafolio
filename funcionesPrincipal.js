//ocultar header
let nav = document.querySelector(".site-header"); 
let ubicacionPrinc = window.scrollY; 

const ocultarHeader = ()=>{
		let desplazamiento = window.scrollY;
		if (ubicacionPrinc <= desplazamiento) {
			nav.classList.add("rolldown");
			nav.classList.remove("rollup");
			nav.classList.remove("backblack"); 	
		}
		else{
			nav.classList.add("rollup");
			nav.classList.remove("rolldown");
			nav.classList.add("backblack"); 	
			};
	ubicacionPrinc = desplazamiento;
	if (desplazamiento < 50) {
		nav.classList.remove("rollup");
		nav.classList.remove("rolldown"); 	
		nav.classList.remove("backblack"); 	
		};	
}

addEventListener("scroll", function(){ocultarHeader();});

//modificar elementos con el ancho de pantalla


let volleyContainer = document.querySelectorAll('.video-board-container')[1];
let baseballContainer = document.querySelectorAll('.video-board-container')[3];
let volleyVideo = document.querySelector('.video-volley');
let baseballVideo = document.querySelector('.video-baseball');
let functionVolleyContainer = document.querySelector('.function-container');
let baseballDescription = document.querySelector('.beisbol-description');

const intercambiarItems = ()=>{
	if (window.innerWidth < 992) {
		volleyContainer.insertBefore(volleyVideo, functionVolleyContainer)
		baseballContainer.insertBefore(baseballVideo, baseballDescription)
	}
	else if (window.innerWidth >= 992) {
		volleyContainer.insertBefore(functionVolleyContainer, volleyVideo)
		baseballContainer.insertBefore(baseballDescription, baseballVideo)
	}
}

intercambiarItems();
window.addEventListener("resize", function(){intercambiarItems();});

