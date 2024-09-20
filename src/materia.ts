export class Materia{
    private materia: string;
    private codMateria: string;

    //h
    constructor(materia: string, codMateria: string){
        this.materia = materia;
        this.codMateria = codMateria;
    }

    infoMateria(){
        console.log(`Alumno: ${this.materia}, codMateria: ${this.codMateria}`)
    }

    
}