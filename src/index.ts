import * as readline from 'readline-sync';
import { Alumno } from './alumno';
import { Materia } from './materia';

function main() {
  const listaAlumnos: Alumno[] = [
    new Alumno("juan","p"),
    new Alumno("juan","p"),
    new Alumno("juan","p")
  ]
  const listaMaterias: Materia[] = []
  console.log('=== Gestor de Alumnos ===');

  // Mostrar menú de operaciones
  const operaciones = ['Crear Alumno', 'Crear Materia','Asignar materia a alumo','Listar materias del alumno', 'Listar materias','Asignar nota a materia', 'Listar alumnos con notas'];
  const indice = readline.keyInSelect(operaciones, 'Seleccione una operación: ');

  if (indice === -1) {
    console.log('Operación cancelada.');
    return;
  }


  let resultado: number;
  switch (indice) {
    case 0: // Crear Alumno
    const nombre = readline.question('Nombre del alumno: ');
    const apellido = readline.question('Apellido del alumno: ');
    const nuevoAlumno = new Alumno(nombre, apellido);
    listaAlumnos.push(nuevoAlumno)
    nuevoAlumno.infoAlumno()
      break;
    case 1: // Crear Materia
    const nMateria = readline.question('Nombre de la materia: ');
    const codMateria = readline.question('Codigo para la materia: ');
    const materia = new Materia(nMateria, codMateria);
      break;
    case 2: // Asignar materia a alumno

      break;
    case 3: // Listar materias del alumno`

      break;
    case 4 : // Lista materia
    listaMaterias.forEach(materia =>{
      console.log(materia.infoMateria())
    })
      break;
    case 5: // Asignar nota a materia
      break;
    case 6: // Listar alumnos con notas
    listaAlumnos.forEach(alumno => {
      console.log(alumno.infoAlumno())
    })
      break;
    default:
      console.log('Operación no válida.');
      return;
  }

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