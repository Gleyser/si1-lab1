﻿function adicionaTema() {
	$nome = $('#temasAprender').val();
 $id = $nome.split(" ").join("");  // tira os espaços em branco do nome

	if ($('#' + $id).length) { // se já existir uma div com esse id lança uma msg de erro
		alert("Tema já existe!");
	} else {

		$('#series').append('<div class="label label-danger col-sm-5"  id="' + $id + '"> </div>');
		$divSeriado = $('#' + $id);
		$divSeriado.append("<h3>" + $nome);
		$divSeriado.append("<br /> ");
		

		limpaForms();
		$divSeriado.hide().fadeIn();
	}
}

function limpaForms() {
	$('#nome').val('');
	$('#descricao').val('');
	$('#lancamento').val('');
}

function removerSerie(){
	$nome = $('#nomeRem').val();
	$id = $nome.split(" ").join("");  // tira os espaços em branco do nome
	$('#'+ $id).fadeOut();	
} 
