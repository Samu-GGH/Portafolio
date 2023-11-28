let nav = document.querySelector(".site-header"); 
let ubicacionPrinc = window.scrollY; 

const ocultarHeader = ()=>{
		let desplazamiento = window.scrollY;
		if (ubicacionPrinc <= desplazamiento) {
			nav.classList.add("rolldown");
			nav.classList.remove("rollup");
		}
		else{
			nav.classList.add("rollup");
			nav.classList.remove("rolldown");
			}
	ubicacionPrinc = desplazamiento;
	if (desplazamiento < 100) {
		nav.classList.remove("rollup");
		nav.classList.remove("rolldown"); 		
		}
}

addEventListener("scroll", function(){ocultarHeader();});