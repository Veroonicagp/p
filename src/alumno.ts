export class Alumno{
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //
    infoAlumno(){
        console.log(`Alumno: ${this.nombre}, Edad: ${this.apellido}`)
    }

}