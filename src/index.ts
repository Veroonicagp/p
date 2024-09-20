import * as readline from 'readline-sync';
import { Alumno } from './alumno';
import { Materia } from './materia';

function main() {
  console.log('=== Gestor de Alumnos ===');

  // Mostrar menú de operaciones
  const operaciones = ['Crear Alumno', 'Crear Materia','Asignar materia a alumo','Listar materias del alumno', 'Listar materias','Asignar nota a materia', 'Listar alumnos con notas'];
  const indice = readline.keyInSelect(operaciones, 'Seleccione una operación: ');

  if (indice === -1) {
    console.log('Operación cancelada.');
    return;
  }

  // Realizar la operación seleccionada 
  let resultado: number;
  switch (indice) {
    case 0: // Crear Alumno
    const nombre = readline.question('Ingrese el primer número: ');
    const apellido = readline.question('Ingrese el primer número: ');
    const alumno = new Alumno(nombre, apellido);
      break;
    case 1: // Crear Materia
      break;
    case 2: // Asignar materia a alumo
      break;
    case 3: // Listar materias del alumno
      break;
    case 4 : // Listar materias
      break;
    case 5: // Asignar nota a materia
      break;
    case 6: // Listar alumnos con notas
      break;
    default:
      console.log('Operación no válida.');
      return;
  }

  console.log(`El resultado de su busqueda es:`);

  // Preguntar si desea realizar otra operación
  const continuar = readline.keyInYN('¿Desea realizar o consultar otro dato? ');
  if (continuar) {
    main(); // Llamada recursiva para reiniciar el proceso
  } else {
    console.log('Hasta pronto.');
  }
}

// Ejecutar la función principal
main();