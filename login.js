// script.js

// Usuários "mockados" (apenas exemplo)
const users = [
  { username: "admin", password: "1234" },
  { username: "Jairison", password: "12345" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  const validUser = users.find(user => user.username === username && user.password === password);

  if (validUser) {
    // Aqui você pode redirecionar para outra página
    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html"; // exemplo
  } else {
    errorMessage.textContent = "Usuário ou senha inválidos!";
  }
});
