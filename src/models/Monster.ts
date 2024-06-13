import Contestant from "./Contestant";

class Monster extends Contestant { 

    public constructor(health : number, special : number,strength : number , name : string, level : number, prompt : string ){
    super(health , special ,strength , name, level , prompt); 

    }
}

export default Monster;