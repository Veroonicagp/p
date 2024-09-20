"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.materias = [];
    }
    //asignamos una materia al alumno
    asignarMateria(materia) {
        this.materias.push(materia);
    }
    listaAlumno() {
        this.listaAlumno;
    }
    //da la informacion basica del alumno
    infoAlumno() {
        console.log(`Alumno: ${this.nombre}, Apellido: ${this.apellido}`);
    }
}
exports.Alumno = Alumno;
//# sourceMappingURL=alumno.js.map