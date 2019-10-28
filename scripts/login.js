
$(document).ready(function() {
    esconder();
});

function esconder(){
	$("#erro_user").hide();
	$("#erro_senha").hide();
};

function enviar(){
	event.preventDefault();
	let usuario = $("#txt_usuario").val();
	let senha = $("#txt_senha").val();

	if(!validar(usuario, senha)) return;	
	
	var sucesso = false;

	$.ajax({
		type: "POST",
		url: "backend.html",
		contentType : "application/json; charset=utf-8",
		data: { 
			user : usuario,
			pass : senha,
		},
		success: function(data,status,xhr){
			sucesso = true;
		},
		error: function(xhr, status, error){
			alert("Error!" + xhr.status);
		},
		complete: function(){
			if(!sucesso){
				 alert('Usuário ou senha incorretos!');
			}
		},
		dataType: "json"
	});
  
};

function validar(usuario, senha){
	let retornoUsuario = true;
	let retornoSenha = true;
	
	if(usuario.length < 8){
		document.getElementById("erro_user").innerHTML = "O usuário deve conter pelo menos 8 caracteres";
		$("#erro_user").show().fadeOut( 3000 );
		retornoUsuario = false;
	}
	if(senha < 6){
		document.getElementById("erro_senha").innerHTML = "A senha deve conter pelo menos 6 caracteres";
		$("#erro_senha").show().fadeOut( 3000 );
		retornoSenha = false;
	}
	
	return retornoUsuario && retornoSenha;
};