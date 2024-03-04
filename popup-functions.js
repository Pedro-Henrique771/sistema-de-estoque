// popup-functions.js

class CriarProduto {
    
    constructor() {
        this.formulario = document.querySelector('.dados-produto');
        this.id = 1;
        this.eventos();
    }

    criaId() {
        let id = 0;
        return id++
    }

    eventos() {
        //const btnAdicionar = document.querySelector('.btn-add');
        if (this.validarCampos()) {
                this.adicionarProdutos();
                this.despreencherCampos();
                fecharPopup(); // Chamada para fechar o PopUp após adicionar produtos
            }
        
    }

    validarCampos() {
        let valid = true;
        for (let campo of this.formulario.querySelectorAll('.campo')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value && label !== 'Qtd de produtos:') {
                alert(`O campo ${label} não pode ficar vazio.`);
                valid = false;
            }
        }
        return valid;
    }

    adicionarProdutos() {
        

        const tabela = document.querySelector('.tabela-produtos');
        const nomeProduto = document.querySelector('#nome-produto').value;
        const qtdEstoque = document.querySelector('#qtd-estoque').value || 0;
        const valorProduto = document.querySelector('#valor').value;

        const novaLinha = document.createElement('tr');
        
        const column1 = document.createElement('td');
        column1.textContent = nomeProduto;
        const column2 = document.createElement('td');
        column2.textContent = this.id;
        const column3 = document.createElement('td');
        column3.textContent = qtdEstoque;
        const column4 = document.createElement('td');
        column4.textContent = qtdEstoque / 20;
        const column5 = document.createElement('td');
        column5.textContent = `R$ ${valorProduto}`;
        const column6 = document.createElement('td');
        column6.textContent = `R$ ${qtdEstoque * valorProduto}`;
        
        novaLinha.appendChild(column1);
        novaLinha.appendChild(column2);
        novaLinha.appendChild(column3);
        novaLinha.appendChild(column4);
        novaLinha.appendChild(column5);
        novaLinha.appendChild(column6);
        tabela.querySelector('tbody').appendChild(novaLinha);

        this.id++;
        alert('Produto adicionado com sucesso!');
    }

    despreencherCampos() {
        document.querySelector('#nome-produto').value = '';
        document.querySelector('#qtd-estoque').value = '';
        document.querySelector('#valor').value = '';
    }

}

export default CriarProduto;

// Função para fechar o pop-up
function fecharPopup() {
    // Oculta a janela pop-up e o fundo de sobreposição
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

export { fecharPopup }; // Exporta a função fecharPopup separadamente
  