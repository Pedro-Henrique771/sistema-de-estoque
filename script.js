document.getElementById('openPopupButton').addEventListener('click', function() {
    openPopup();
});

function openPopup() {
    // Caminho para o arquivo HTML do conteúdo do pop-up
    var popupContentPath = 'popup-content.html';

    // Carregar dinamicamente o conteúdo do arquivo HTML
    fetch(popupContentPath)
        .then(response => response.text())
        .then(content => {
            // Criar uma janela pop-up com o conteúdo do arquivo HTML
            var popupWindow = window.open('', 'Nome_da_Janela', 'width=600, height=400');
            
            // Inserir o conteúdo na janela pop-up
            popupWindow.document.write(content);
            
            // Certifique-se de fechar a tag HTML na janela pop-up
            popupWindow.document.close();
        })
        .catch(error => console.error('Erro ao carregar o conteúdo do pop-up:', error));
}

// Função para ser chamada quando o formulário dentro do pop-up for enviado
function submitForm() {
    // Lógica para processar os dados do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    // Exemplo de alerta com os dados do formulário
    alert('Nome: ' + nome + '\nEmail: ' + email);

    // Adicione aqui a lógica adicional conforme necessário
}
