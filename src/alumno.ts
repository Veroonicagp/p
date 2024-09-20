import { Materia } from "./materia";
export class Alumno{
    private nombre: string;
    private apellido: string;
    private materias: Materia[];

    constructor(nombre: string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.materias = [];
    }

    //asignamos una materia al alumno
    asignarMateria(materia: Materia){
        this.materias.push(materia);
    }

    listaAlumno(){
        this.listaAlumno
    }

    //da la informacion basica del alumno
    infoAlumno(){
        console.log(`Alumno: ${this.nombre}, Apellido: ${this.apellido}`)
    }

}