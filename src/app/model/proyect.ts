export class Proyect {
    id: number;
    nomProyect: string;
    descProyect: string;
    imgProyect: string;

    constructor(nomProyect: string, imgProyect: string,descProyect: string){
        this.nomProyect=nomProyect;
        this.imgProyect=imgProyect;
        this.descProyect=descProyect;
    }
}
