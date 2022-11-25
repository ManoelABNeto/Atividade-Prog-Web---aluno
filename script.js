class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_matricula = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_nota3 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_matricula.innerText = this.arrayProdutos[i].matricula;
            td_nota1.innerText = this.arrayProdutos[i].nota1;
            td_nota2.innerText = this.arrayProdutos[i].nota2;
            td_nota3.innerText = this.arrayProdutos[i].nota3;
            td_media.innerText = this.arrayProdutos[i].media;


            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/deletar-conta.png';
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            td_acoes.appendChild(imgDelete);
            // <td><img><td>

            console.log(this.arrayProdutos);
        }
    }

    adicionar(produto) {
        produto.nota1 = parseFloat(produto.nota1);
        produto.nota2 = parseFloat(produto.nota2);
        produto.nota3 = parseFloat(produto.nota3);
        produto.media = this.calculaMedia(produto.nota1,produto.nota2,produto.nota3);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.matricula = document.getElementById('matricula').value;
        produto.nota1 = document.getElementById('nota1').value;
        produto.nota2 = document.getElementById('nota2').value;
        produto.nota3 = document.getElementById('nota3').value;
        produto.media = this.calculaMedia(produto.nota1, produto.nota2, produto.nota3);

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '- Informe o nome do Aluno \n';
        }

        if(produto.matricula == '') {
            msg += '- Informe a matrícula do aluno \n';
        }
        
        if(produto.nota1 == '') {
            msg += '- Informe a 1º nota \n';
        }

        if(produto.nota2 == '') {
            msg += '- Informe a 2º nota \n';
        }

        if(produto.nota3 == '') {
            msg += '- Informe a 3º nota \n';
        }
        
        if(msg != '') {
            alert(msg);
            return false
        }
        
        return true;
    }

    calculaMedia(nota1, nota2, nota3){
        return (((nota1 + nota2 + nota3) / 3).toFixed(2));
      }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('matricula').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
    }

    deletar(id) {

        if(confirm('Deseja realmente deletar o aluno de ID: ' + id)){
            let tbody = document.getElementById('tbody');
        
            for(let i = 0; i < this.arrayProdutos.length; i++) {
                if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
            }
            }

        console.log(this.arrayProdutos);
        }
    }
        
}

var produto = new Produto();