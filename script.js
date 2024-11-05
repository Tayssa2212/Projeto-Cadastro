class Cadastro {
    constructor() {
        this.dados = [];
    }

    adicionar(dado) {
        this.dados.push(dado);
        this.render();
    }

    editar(index, novoDado) {
        this.dados[index] = novoDado;
        this.render();
    }

    deletar(index) {
        this.dados.splice(index, 1);
        this.render();
    }

    render() {
        const tabela = document.querySelector("#tabelaDados tbody");
        tabela.innerHTML = "";
        this.dados.forEach((dado, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${dado.nome}</td>
                <td>${dado.email}</td>
                <td>
                    <button class="edit" onclick="editar(${index})">Editar</button>
                    <button class="delete" onclick="deletar(${index})">Deletar</button>
                </td>
            `;
            tabela.appendChild(row);
        });
    }
}

const cadastro = new Cadastro();

document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
        cadastro.adicionar({ nome, email });
        document.getElementById("formCadastro").reset();
    }
});

function editar(index) {
    const nome = prompt("Digite o novo nome:", cadastro.dados[index].nome);
    const email = prompt("Digite o novo email:", cadastro.dados[index].email);

    if (nome && email) {
        cadastro.editar(index, { nome, email });
    }
}

function deletar(index) {
    if (confirm("Tem certeza que deseja deletar este dado?")) {
        cadastro.deletar(index);
    }
}