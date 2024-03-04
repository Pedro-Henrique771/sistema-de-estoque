document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de evento ao botão de abertura do pop-up
    var openButton = document.getElementById('openButton');
    openButton.addEventListener('click', abrirPopup);
  
    // Carrega o conteúdo do pop-up
    fetch("popup-content.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("popup").innerHTML = data;
  
        // Adiciona ouvintes de evento aos botões no pop-up
        var closeButton = document.getElementById('closeButton');
        var getNameButton = document.getElementById('getNameButton');
  
        closeButton.addEventListener('click', fecharPopup);
        getNameButton.addEventListener('click', obterNome);
      });
  });
  
  function abrirPopup() {
    // Exibe a janela pop-up e o fundo de sobreposição
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  function fecharPopup() {
    // Oculta a janela pop-up e o fundo de sobreposição
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
  
  function obterNome() {
    // Obtém o valor do input na janela pop-up
    var nome = document.getElementById("nome").value;
    alert("Nome digitado: " + nome);
  }
  