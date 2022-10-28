export function maxValue(values) {
  // implementar logica aqui
  const Arr = values
  let Maior = values[0]
  if(Maior === undefined){
    return Maior = 0;
  }
  else{
    Arr.forEach((atual)=>{
        if(Maior < atual){
          Maior = atual
        }  
      })
  }
  return Maior;
}