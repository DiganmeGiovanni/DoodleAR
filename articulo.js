
var mostrandoIndice = false;

function mostrarIndice()
{
	//alert("Mostrando");
	if (!mostrandoIndice)
	{
		$('#indice').css("opacity", "1");
		$('#indice').css("width", "30%");
		$('#indice').css("pointer-events", "auto");
		$('#articulo').css("border-left", "1px dotted blue");
		mostrandoIndice = true;
	}
	else
	{
		$('#indice').css("opacity", "0");
		$('#indice').css("width", "0%");
		$('#indice').css("pointer-events", "none");
		$('#articulo').css("border-left", "none");
		mostrandoIndice = false;
	}
}