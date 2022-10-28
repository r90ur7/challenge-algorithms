export function isPrime(value) {
  // implementar logica aqui
  if(value === 1){
    return false
  }else{
    for(let divisor = 2; divisor < value; divisor++){
      if((value%divisor === 0)){
          return false
      }
    }
  }
  return true
}