class CriarProduto {
    
    constructor() {
        this.formulario = document.querySelector('.dados-produto');
        this.eventos(); // Todos eventos que acontecem dps do clique no botão de adicionar eventos.
        this.id = 0;    
        this.cont = 0;
    }

    criaId() { 
        return this.id = this.id + 1
    }

    eventos() {
        const btnAdicionar = document.querySelector('.btn-add');
        btnAdicionar.addEventListener('click', () => {
            if(this.validarCampos()) {
                this.adicionarProdutos();
                this.despreencherCampos();
            }
        })
    }

    validarCampos() {
        let valid = true;
        for(let campo of this.formulario.querySelectorAll('.campo')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value && label !== 'Qtd de produtos:') { 
                alert(`O campo ${label} não pode ficar vazio.`)
                valid = false;
            };
        };
        return valid;
    }


    adicionarProdutos() {
        const tabela = document.querySelector('.tabela-produtos');
        const nomeProduto = document.querySelector('#nome-produto').value ;
        const qtdEstoque = document.querySelector('#qtd-estoque').value || 0;
        const valorProduto = document.querySelector('#valor').value;

        //Criando elemento pai.
        const novaLinha = document.createElement('tr');
        

        //Criando todos elementos filhos.
        const column1 = document.createElement('td');
        const column2 = document.createElement('td');
        const column3 = document.createElement('td');
        const column4 = document.createElement('td');
        const column5 = document.createElement('td');
        const column6 = document.createElement('td');
        
        //Adicionando o conteúdo aos filhos.
        column1.textContent = nomeProduto;
        column2.textContent = this.criaId();
        column3.textContent = qtdEstoque;
        column4.textContent = qtdEstoque / 20;
        column5.textContent = `R$ ${valorProduto}`;
        column6.textContent = `R$ ${qtdEstoque * valorProduto}`;
        
        //Adicionando os filhos ao pai.
        novaLinha.appendChild(column1);
        novaLinha.appendChild(column2);
        novaLinha.id = column2.textContent;
        novaLinha.appendChild(column3);
        novaLinha.appendChild(column4);
        novaLinha.appendChild(column5);
        novaLinha.appendChild(column6);
        tabela.querySelector('tbody').appendChild(novaLinha);
        

        alert('Produto adicionado com sucesso!');
    }

    despreencherCampos() {
        document.querySelector('#nome-produto').value = '';
        document.querySelector('#qtd-estoque').value = '';
        document.querySelector('#valor').value = '';
    }

}

const novoProduto = new CriarProduto();

// Função que remove produto da tabela.
const btnRemover = document.querySelector('.remove-produto');
btnRemover.addEventListener('click', () => {
    const idLinhaRemover = document.querySelector('#remove').value;

    // Verifica se a linha foi encontrada
    const linhaRemover = document.getElementById(idLinhaRemover);
    
    if (linhaRemover) {
        linhaRemover.remove();
        alert('Linha removida com sucesso!');
    } else {
        alert('A linha não foi encontrada. Verifique o ID.');
    };
});
