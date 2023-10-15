document.addEventListener("DOMContentLoaded", function() {
    const senhaInput = document.getElementById('senha');
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', function() {
        const senhaAleatoria = gerarSenhaAleatoria(10);
        senhaInput.value = senhaAleatoria;
    });

    function gerarSenhaAleatoria(tamanho) {
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let senha = '';
        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indiceAleatorio);
        }
        return senha;
    }
});