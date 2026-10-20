
const graetThan10 = (number: number): boolean => number >= 10

// fabriquemos una funcion que pueda hacer otras

// 1. typemos una funcion : type nombre_funcion = (parametros typados) => tipo_valor_devuelto
type NumberCheck = (n: number) => boolean;

function greaterThan(limit: number): NumberCheck {
  function check(n: number): boolean {
    return n >= limit
  }
  return check
}

const greaterThan_10 = greaterThan(10);
const greaterThan_20 = greaterThan(20);
const greaterThan_30 = greaterThan(30);


const nums = [-2, 3, -4, -5, 6]

const greaterThan3 = greaterThan(3)
nums.filter(greaterThan3)


// crear 1 funcion fabrica que le pase 2 valores y genere true o false 
// si el valor pedido esta entre esos 2 valores sin incluirllo
function createBetween(number1: number, number2: number): NumberCheck {
  // return (n: number) : boolen => n > number1 && n < number2
  function check(n: number): boolean {
    return n > number1 && n < number2
  }
  return check
}

