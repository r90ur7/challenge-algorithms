export function longestWords(words) {
    // implementar logica aqui
    const Listapalavras = words
    let Maior = [' ']
        Listapalavras.map((palavra) => {
            if(palavra.length === Maior[0].length){
                Maior.push(palavra)
            }
            else if(palavra.length > Maior[0].length){
                Maior = [palavra]
            }
        })
    return Maior
}
