document.addEventListener('DOMContentLoaded', function() {
    let sliderElement = document.querySelector('#slider');
    let buttonElement = document.querySelector('#button');
    let sizePassword = document.querySelector('#valor');
    let passwordElement = document.querySelector('#password');
    let containerPassword = document.querySelector('#container-password');

    function gerarSenhaAleatoria(comprimento) {
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;\',./';
        var senha = '';
        for (var i = 0; i < comprimento; i++) {
            var indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indice);
        }
        return senha;
    }

    sliderElement.addEventListener('input', function() {
        sizePassword.textContent = this.value;
    });

    buttonElement.addEventListener('click', function() {
        var tamanhoSenha = sliderElement.value;
        var senhaGerada = gerarSenhaAleatoria(tamanhoSenha);
        passwordElement.textContent = senhaGerada;
        containerPassword.classList.remove('hide');
    });

    passwordElement.addEventListener('click', function() {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        alert('Senha copiada para a área de transferência.');
    });
});