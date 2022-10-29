export function isAnagram(word1, word2) {
  // implementar logica aqui
  const anagrama = word1.toLowerCase().split('');
  const palavra =  word2.toLowerCase().split('');
  palavra.sort((a, b) => {
    return a.localeCompare(b);
  })
  anagrama.sort((a, b) => {
    return a.localeCompare(b);
  })
  if( anagrama.length > palavra.length){
    return false
  }
  for(let i = 0;i < word2.length; i++){
    if(anagrama[i] !== palavra[i]){ 
        return false;
    }
  }
return true;
}