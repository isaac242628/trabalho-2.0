let itens = document.querySelectorAll(".item");

// Função de scroll
document.addEventListener("scroll", () => {
  // Calcula a posição do carrossel em relação à tela
  let proporcao =
    document.querySelector(".carrossel").getBoundingClientRect().top /
    window.innerHeight;

  // Calculando o índice do item ativo
  let index = Math.max(
    0,
    Math.min(itens.length - 1, Math.ceil(-1 * (proporcao + 0.5)))
  );

  // Atualizando os itens de acordo com o índice
  itens.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
