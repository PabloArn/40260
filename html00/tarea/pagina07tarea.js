document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("Enviar");
  const user = document.getElementById("user");
  const password = document.getElementById("password");
  const formulario = document.getElementById("loginForm");

  const mostrar = () => {
    if (user.value.trim() === "" || password.value.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    console.log("Usuario:", user.value);
    console.log("Contraseña:", password.value);

    user.setAttribute("name", "q");
    password.setAttribute("name", "password");
    formulario.setAttribute("action", "https://google.com/search");

    formulario.submit();
  };

  boton.addEventListener("click", mostrar);
});