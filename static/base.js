/*                                                        */
/* mostrar y ocultar renglones de la tabla de normas      */
/* de cada categoria que cumplan el filtro                */

function clean(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtrar_renglones() {

    var input, filtro, i, j, heading, tables, rows, nombre, texto;

    input = document.getElementById("filtro");
    filtro = clean(input.value.toUpperCase());

    tables = document.getElementsByTagName("table");
    for (i = 0; i < tables.length; i++) {

	heading = tables[i].previousElementSibling;
	if (heading.tagName === "H4") {
	    tables[i].style.display = "none";
	}

	rows = tables[i].getElementsByTagName("tr");
	for (j = 0; j < rows.length; j++) {
          if (filtro) {
	    tema = rows[j].getElementsByTagName("td")[0];
	    texto_tema = clean(tema.textContent);
	    resumen = rows[j].getElementsByTagName("td")[1];
	    texto_resumen = clean(resumen.textContent);
	    if (texto_tema.toUpperCase().indexOf(filtro) > -1
		|| texto_resumen.toUpperCase().indexOf(filtro) > -1) {
		tables[i].style.display = "block";
		rows[j].style.display = "block";
	    } else {
		rows[j].style.display = "none";
            }
	  }
	    else
	    {
		rows[j].style.display = "block";
	    }
        }
    }
}
