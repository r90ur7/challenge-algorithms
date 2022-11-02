export function fibonacci(value) {
  // implementar logica aqui
  const fib = [0,1]
  let i = 1
  while (value > fib.length-1){
    fib.push(fib[i - 1] + fib[i])
    i ++ 
  }
  return fib[value]
}