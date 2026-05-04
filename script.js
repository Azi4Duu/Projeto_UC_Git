document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        console.log("Tentativa de login com:", email);
        alert("Login enviado com sucesso! (Simulação)");
    }
});