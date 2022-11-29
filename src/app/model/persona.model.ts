export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descrip: string;
    img?: string;
    nivel: string;

    constructor(nombre: string, apellido:string,descrip:string, img: string,nivel: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descrip= descrip;
        this.img = img;
        this.nivel= nivel;
    }
}