export function sumEven(value) {
  // implementar logica aqui
  let Soma = 0
    for(let i = 0;i < value.length;i++){
      if(value === undefined){
        return 0
      }else{
        if(value[i] % 2 === 0){
          Soma = value[i] + Soma
        }
    }
  }
  return Soma
}