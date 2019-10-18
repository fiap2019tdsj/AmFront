function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var repitaSenha = document.getElementById("repita-senha").value;

    if(email == '' || email.length < 5) {
        document.getElementById("nome").style.border = "solid 1px #ff886a"; 
        document.getElementById("pop-up-msg").style.display = "block";
    }
    else if (senha == ''){
        document.getElementById("senha").style.border = "solid 1px #ff886a";
        document.getElementById("pop-up-msg").style.display = "block";
    }
    else {
        document.getElementById("formulario").submit();
    }   
}

$("#fomCadastro").onchange(function() {
    var email = $("#email").val();
    var senha = $("#senha").val();

    if (senha != "" && email != "") {
          $("#btnCadastrar").prop('disabled', false);
    } else {
          $("#btnCadastrar").prop('disabled', true);
    }       
});
