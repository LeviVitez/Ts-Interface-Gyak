interface Results {
    winner:string;
    date:Date;

    result():void;
    toString():string;
}
class Football implements Results{
    winner: string;: string;
    #golokszama:number;

    constructor (winner:string,golokszama:number){
        this.winner=winner;
        this.#golokszama=golokszama;
    }

    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.wi+" ("+this.hossz+" s)"
    }

}