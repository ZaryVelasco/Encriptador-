function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

document.getElementById('encryptBtn').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {
        alert("Por favor, ingrese un texto para encriptar.");
        return;
    }
    let encryptedText = encrypt(inputText, 3);
    document.getElementById('outputText').innerText = encryptedText;
    document.getElementById('copyBtn').style.display = 'inline-block';
});

document.getElementById('decryptBtn').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
        return;
    }
    let decryptedText = decrypt(inputText, 3);
    document.getElementById('outputText').innerText = decryptedText;
    document.getElementById('copyBtn').style.display = 'inline-block';
});

document.getElementById('copyBtn').addEventListener('click', function () {
    let outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(function () {
        alert("Texto copiado al portapapeles");
    }, function () {
        alert("Error al copiar el texto");
    });
});


