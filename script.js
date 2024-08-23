// Espera o DOM carregar e chame a função addActiveLink()
document.addEventListener("DOMContentLoaded", function () {
  addActiveLink();
});

function sendMessage() {
  const campoNomeRequired = document.getElementById("nome").required;
  const campoNome = document.getElementById("nome").value;

  const campoEmailRequired = document.getElementById("email").required;
  const campoEmail = document.getElementById("email").value;

  if (
    campoNome &&
    campoEmail &&
    campoNomeRequired != undefined &&
    campoEmailRequired != undefined
  ) {
    alert("Mensagem enviada com Sucesso!");
  }
}

// Após clicar no botão chama a funcão addActiveLink()
document.addEventListener("click", function () {
  addActiveLink();
});

function addActiveLink() {
  const menuItems = document.querySelectorAll(".menu-horizontal a");

  // Aguarde 100ms
  setTimeout(() => {
    // Pegue a hash após a url
    const currentLocation = window.location.hash;

    // Percorra todo o menu items e faça a condição
    menuItems.forEach((item) => {
      // Pegue o valor do atributo href e delete os 11 primeiros caracteres
      const linkHref = item.getAttribute("href").slice(10);

      // Faça a condição e aplique a class activeLink
      if (linkHref === currentLocation) {
        item.classList.add("activeLink");
      } else {
        item.classList.remove("activeLink");
      }
    });
  }, 100);
}
