const form = document.getElementById("form_1")
const nome = []
const numero = []
const position = []

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha(){
    const inputNome = document.getElementById("nome");
    const inputNumero = document.getElementById("numero");

    if (nome.includes(inputNome.value)){
        alert(`A atividade: ${inputNome.value} já foi inserida`);
    } else{

    nome.push(inputNome.value);
    numero.push(parseFloat(inputNumero.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += "</tr>";
    
    linhas += linha;}

    inputNome.value = '';
    inputNumero.value = '';

    

}



function atualizaTabela() {
const corpoTabela = document.querySelector("tbody");
corpoTabela.innerHTML = linhas;
}