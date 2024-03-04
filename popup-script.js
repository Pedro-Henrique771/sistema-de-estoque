import CriarProduto, { fecharPopup } from './popup-functions.js';

document.addEventListener('DOMContentLoaded', function () {
    let openButton = document.getElementById('openButton');
    openButton.addEventListener('click', abrirPopup);

    fetch("popup-content.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("popup").innerHTML = data;

            let closeButton = document.getElementById('closeButton');
            let getProdutoButton = document.getElementById('btn-add');

            closeButton.addEventListener('click', fecharPopup);

            // Remova a criação da nova instância da classe CriarProduto aqui
            //let novoProduto = new CriarProduto();
            
            getProdutoButton.addEventListener('click', function () {
                // Remova a criação da nova instância da classe CriarProduto aqui
                //novoProduto.eventos();
                
                // Chame diretamente o método adicionarProdutos do protótipo
                CriarProduto.prototype.adicionarProdutos.call(CriarProduto.prototype);
            });
        });
});

function abrirPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
