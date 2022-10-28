export function fibonacci(value) {
  // implementar logica aqui
  if (value <= 1) {
    return value;
}
return fibonacci(value -1 ) + fibonacci(value -2)
}