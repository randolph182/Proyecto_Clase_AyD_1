export class Curso{
    public id_curso:number;
    public nombre:string;
    public no_creditos:number;
    public descripcion:string;
    public id_escuela:number;
    constructor(id:number,nombre:string,no_creditos:number,id_escuela:number,descripcion?:string){
        this.id_curso = id;
        this.nombre = nombre;
        this.no_creditos = no_creditos;
        this.descripcion = descripcion;
        this.id_escuela = id_escuela;
    }
}