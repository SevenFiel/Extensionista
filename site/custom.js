//função para mostrar/esconder o menu mobile
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu')
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "img/menu_white_36dp.png"
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "img/close_white_36dp.png"
  }
}

//validação formulário
document.getElementById("enviar-msg").addEventListener("submit", function(event) {
  // Obtendo os valores dos campos
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Verificando se os campos estão preenchidos
  if (name !== "" && email !== "" && message !== "") {
    // Verificando se o email é válido
    if (validarEmail(email)) {
      // Exibindo a mensagem de sucesso
      showAlert();

      // Enviando o formulário após um pequeno atraso para permitir que a mensagem seja vista
      setTimeout(function() {
        document.getElementById("enviar-msg").submit();
      }, 2000); // Ajuste o valor do atraso conforme necessário
    } else {
      // Exibindo a mensagem de erro se o email não for válido
      showError("Por favor, insira um e-mail válido.");
      // Impedindo o envio padrão do formulário se houver erro
      event.preventDefault();
    }
  } else {
    // Exibindo a mensagem de erro se campo mensagem estiver em branco
    showError("Por favor, digite sua mensagem.");
    // Impedindo o envio padrão do formulário se houver erro
    event.preventDefault();
  }
  // Impedindo o envio padrão do formulário
  event.preventDefault();
});

// Função para exibir a mensagem de sucesso
function showAlert() {
  Swal.fire('Sucesso', 'Obrigado pela mensagem!', 'success');
}

// Função para exibir a mensagem de erro
function showError(message) {
  Swal.fire('Erro', message, 'error');
}

// Função para validar o formato do email usando expressão regular
function validarEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}