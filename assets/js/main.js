(() => {
    function getRandomPassword (size) {
        const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const upperLetters = lowerLetters.map(letter => letter.toUpperCase());
        const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '\\', '~', '^'];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        const all = [...lowerLetters, ...upperLetters, ...symbols, ...numbers];

        let password = [
            lowerLetters[Math.floor(Math.random() * lowerLetters.length)],
            upperLetters[Math.floor(Math.random() * upperLetters.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            numbers[Math.floor(Math.random() * numbers.length)]
        ];

        for (let i = password.length; i < size; i++) {
            let indexRandom = Math.floor(Math.random() * all.length);
            password.push(all[indexRandom]);
        }

        return password.join("");
    }

    function passwordGenerate (e) {
        e.preventDefault();

        const size = Number(document.getElementById("tamanho").value);
        const passwordGenerator = getRandomPassword(size);
        document.getElementById("generated-password").value = passwordGenerator;
    }

    document.querySelector("form").addEventListener("submit", passwordGenerate);

    const copyBtn = document.getElementById("copy-btn");
    const passwordField = document.getElementById("generated-password");

    copyBtn.addEventListener('click', () => {
        const password = passwordField.value;

        if (!password) {
            alert("Primeiro gere uma senha!");
            return;
        }

        navigator.clipboard.writeText(password)
            .then(() => {
                alert("Senha copiada com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao copiar a senha", error);
                alert("Houve um erro em copiar a senha");
            })
    })
})();
