export class CursoDisponible{
    public nombreCatedratico:string;
    public seccion:string;
    public no_creditos:number;
    public descripcion:string;
    public id_escuela:number;
    public salon:number;
    constructor(nombreCatecratico:string,seccion:string,salon:number){
        this.nombreCatedratico = nombreCatecratico;
        this.seccion = seccion;
        this.salon = salon;
    }
}