let numero1 = parseInt(prompt('Ingrese el primer numero: '));
let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

let operacion = prompt('Ingrese el tipo de operación a realizar (sumar, restar, multiplicar o dividir): ',);

let resultado;

switch(operacion) {
  
  case 'sumar':
  resultado = numero1 + numero2;
  alert(resultado);
  break;

  case 'restar':
  resultado = numero1 - numero2;
  alert(resultado)
  break;

  case 'multiplicar':
  resultado = numero1 * numero2;
  alert(resultado)
  break;

  case 'dividir':
    if(numero1>0 && numero2>0) {
     resultado = numero1 / numero2;
      } else{
      alert ('No se puede dividir entre 0')
     }

  default:
    alert("Ingrese una operacion valida")
  break;
  
}


