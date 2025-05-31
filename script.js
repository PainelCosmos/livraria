const livros = JSON.parse(localStorage.getItem("livros")) || [];

function renderLivros() {
  const container = document.getElementById("livros-container");
  container.innerHTML = "";
  livros.forEach((livro, index) => {
    const livroEl = document.createElement("div");
    livroEl.className = "livro";
    livroEl.innerHTML = `
      <img src="\${livro.capa}" alt="Capa do Livro"/>
      <h3>\${livro.titulo}</h3>
      <p>\${livro.descricao}</p>
      <button onclick="comprar(\${index})">Comprar Agora</button>
    `;
    container.appendChild(livroEl);
  });
}

function comprar(index) {
  const livro = livros[index];
  const msg = encodeURIComponent(\`Olá! Tenho interesse no livro: \${livro.titulo}\`);
  window.open(\`\${livro.whatsapp_link}?text=\${msg}\`, "_blank");
}

renderLivros();