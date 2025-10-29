const htmlUrl = "https://example.com/pagina.html"; // troque pela URL desejada

// Faz o download do HTML e substitui o conteúdo da página
fetch(htmlUrl)
  .then(response => {
    if (!response.ok) throw new Error("Erro ao carregar o HTML remoto");
    return response.text();
  })
  .then(html => {
    // Substitui todo o conteúdo da tag <html> pelo HTML carregado
    document.getElementsByTagName("html")[0].innerHTML = html;
  })
  .catch(error => {
    console.error("Falha ao carregar HTML:", error);
    document.body.innerHTML = `
      <div style="color:white;background:#111;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;">
        <p>Erro ao carregar o conteúdo.</p>
      </div>`;
  });
