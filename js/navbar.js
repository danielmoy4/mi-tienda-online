document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const logoBox = document.createElement("div");
  logoBox.classList.add("logo-box");
  logoBox.innerHTML = `<div class="logo">Bear Tech</div>`;

  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  const enlacesBase = [
    { name: "Inicio", href: "index.html" },
    { name: "Productos", href: "tienda.html" }
  ];

  let enlacesFinales = [];

  if (usuario) {
    enlacesFinales = [
      ...enlacesBase,
      { name: "Mis Compras", href: "compras.html" },
      { name: `Hola, ${usuario.nombre}`, href: "#", isGreeting: true },
      { name: "Perfil", href: "perfil.html" },
      { name: getDarkModeLabel(), href: "#", isDarkToggle: true },
      { name: "Cerrar sesión", href: "#", isLogout: true }
    ];
  } else {
    enlacesFinales = [
      ...enlacesBase,
      { name: getDarkModeLabel(), href: "#", isDarkToggle: true },
      { name: "Iniciar Sesión", href: "login.html" },
      { name: "Registrarse", href: "registro.html" }
    ];
  }

  enlacesFinales.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.href;
    a.textContent = item.name;
    a.classList.add("nav-link");

    if (item.isGreeting) {
      a.style.fontWeight = "bold";
      a.style.pointerEvents = "none";
    }

    if (item.isLogout) {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioActivo");
        location.href = "index.html";
      });
    }

    if (item.isDarkToggle) {
      a.id = "toggle-theme";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.toggle("dark-mode");
        // Cambiar ícono y guardar estado si deseas
        a.textContent = getDarkModeLabel();
      });
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(logoBox);
  nav.appendChild(ul);
  header.appendChild(nav);
  navbarContainer.innerHTML = "";
  navbarContainer.appendChild(header);
});

// Función para determinar el ícono del modo
function getDarkModeLabel() {
  return document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
}
