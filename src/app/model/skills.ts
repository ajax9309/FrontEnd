export class Skills {
    id: number;
    nomSkill: string;
    porcSkill: number;
    colorSkill: string;

    constructor(nomSkill: string, 
        porcSkill: number,
        colorSkill:string){
        this.nomSkill=nomSkill;
        this.porcSkill=porcSkill;
        this.colorSkill=colorSkill;
    }
}
