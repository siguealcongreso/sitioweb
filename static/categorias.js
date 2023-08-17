/*                                                        */
/* mostrar y ocultar la tabla de normas de cada categoria */
/* cuando se toca o hace clic en el encabezado            */


var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    var filtro = document.getElementById('filtro');
    filtro.value = '';
    filtrar_renglones()
});



var title = document.querySelector('.title');
var headings = document.getElementsByClassName("heading");
var i;

for (i = 0; i < headings.length; i++) {
    /* responder a clics */
    headings[i].addEventListener("click", function() {

	var table = this.nextElementSibling;
	if (table.style.display === "block") {
	    table.style.display = "none";
	} else {
	    table.style.display = "block";
	}
    });
    /* estado inicial */
    var table = headings[i].nextElementSibling;
    table.style.display = "none";
}

title.onclick = function(e) {
	for (i=0; i < headings.length; i++) {
	    var table = headings[i].nextElementSibling;
	    if (title.state) {
		table.style.display = "none";
	    } else {
		table.style.display = "block";
	    }
	}
    if (title.state) {
	title.state = "";
    } else {
	title.state = "open";
    }
}
