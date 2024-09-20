"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const alumno_1 = require("./alumno");
const materia_1 = require("./materia");
function main() {
    const listaAlumnos = [
        new alumno_1.Alumno("juan", "p"),
        new alumno_1.Alumno("juan", "p"),
        new alumno_1.Alumno("juan", "p")
    ];
    const listaMaterias = [];
    console.log('=== Gestor de Alumnos ===');
    // Mostrar menú de operaciones
    const operaciones = ['Crear Alumno', 'Crear Materia', 'Asignar materia a alumo', 'Listar materias del alumno', 'Listar materias', 'Asignar nota a materia', 'Listar alumnos con notas'];
    const indice = readline.keyInSelect(operaciones, 'Seleccione una operación: ');
    if (indice === -1) {
        console.log('Operación cancelada.');
        return;
    }
    let resultado;
    switch (indice) {
        case 0: // Crear Alumno
            const nombre = readline.question('Nombre del alumno: ');
            const apellido = readline.question('Apellido del alumno: ');
            const nuevoAlumno = new alumno_1.Alumno(nombre, apellido);
            listaAlumnos.push(nuevoAlumno);
            nuevoAlumno.infoAlumno();
            break;
        case 1: // Crear Materia
            const nMateria = readline.question('Nombre de la materia: ');
            const codMateria = readline.question('Codigo para la materia: ');
            const materia = new materia_1.Materia(nMateria, codMateria);
            break;
        case 2: // Asignar materia a alumno
            break;
        case 3: // Listar materias del alumno`
            break;
        case 4: // Lista materia
            listaMaterias.forEach(materia => {
                console.log(materia.infoMateria());
            });
            break;
        case 5: // Asignar nota a materia
            break;
        case 6: // Listar alumnos con notas
            listaAlumnos.forEach(alumno => {
                console.log(alumno.infoAlumno());
            });
            break;
        default:
            console.log('Operación no válida.');
            return;
    }
    // Preguntar si desea realizar otra operación
    const continuar = readline.keyInYN('¿Desea realizar o consultar otro dato? ');
    if (continuar) {
        main(); // Llamada recursiva para reiniciar el proceso
    }
    else {
        console.log('Hasta pronto.');
    }
}
// Ejecutar la función principal
main();
//# sourceMappingURL=index.js.map