const form = document.getElementById('form-agenda');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-completo');
    const inputNumero = document.getElementById('numero-contato');
    const inputContato = document.querySelector('input[name="meio-contato"]:checked');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    document.querySelector('form').reset();
});



