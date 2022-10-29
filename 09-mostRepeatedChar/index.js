export function mostUsedChar(text) {
    // implementar logica aqui
    const CharUnited = text.toLowerCase().split(" ").join('')
            const Char = CharUnited.split("");
            Char.sort((a, b) => {
                return a.localeCompare(b);
            })
            let Count = 1
            let maior = 0
            let FrequenteChar = ''
            for(let i = 1;i < text.length; i ++ ){
                //console.log(maior, FrequenteChar)
                if(Char[i] === Char[i-1]){
                    Count ++
                }else{
                    Count = 1
                }
                if (Count > maior){
                    maior = Count
                    FrequenteChar = Char[i]
                }
            }
            
            return FrequenteChar
}