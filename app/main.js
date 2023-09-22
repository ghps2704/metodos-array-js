let livros = []
const endpointdaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivros()

async function getBuscarLivros() {
    const res = await fetch(endpointdaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibeOsLivrosNaTela(livrosComDesconto)
}
