
/*
//validação form
    const nome = document.querySelector("#name");
    const email = document.querySelector("#mail");
    const telefone = document.querySelector("#telefone");
    const cidade = document.querySelector("#cidade");
    const motivo = document.querySelector("#motivo");
    const mensagem = document.querySelector("#message");
    const botao = document.formulario.querySelector("#botao");
    const errorMessage = document.querySelector(".msg")
    botao = addEventListener("click", (e) => {
      e.preventDefault();
      const nomeValue = nome.value;
      const emailValue = email.value;
      const telefoneValue = telefone.value;
      const cidadeValue = cidade.value;
      const motivoValue = motivo.value;
      const mensagemValue = mensagem.value;
      if (nomeValue <= 2) {
        errorMessage.textContent = "Por favor preencha o nome";
        document.getElementById("name").focus();
        return;
      }else 
      if (email <= 5) {
        errorMessage.textContent = "Por favor preencha o email";
        document.getElementById("mail").focus();
        return;
      }else
      if (telefoneValue <= 8) {
        errorMessage.textContent = "Por favor preencha o telefone";
        document.getElementById("telefone").focus();
        return;
      }else
      if (cidadeValue == "") {
        errorMessage.textContent = "Por favor selecione a cidade";
        document.getElementById("cidade").focus();
        return;
      }else
      if (motivoValue == null) {
        errorMessage.textContent = "Por favor selecione um motivo";
        document.getElementById("motivo").focus();
        return;
      }else
      if (mensagemValue == null) {
        errorMessage.textContent = "Coloque uma descrição";
        document.getElementById("message").focus();
        return;
      }
      return true; 
      })  */