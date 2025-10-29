fetch("https://mug3now4ri.github.io/b14z3p0c7357/home.html")
    .then(response => {
      if (!response.ok) throw new Error("Erro ao carregar o HTML remoto");
      return response.text();
    })
    .then(html => {
      document.getElementsByTagName("html")[0].innerHTML = html;
    })
    .catch(error => {
      console.error("Falha ao carregar HTML:", error);
      document.body.innerHTML = "<h2>Erro ao carregar o conteúdo.</h2>";
    });
