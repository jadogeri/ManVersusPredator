import IContestant from "../interfaces/IContestant";

class Fighter implements IContestant {
    prompt?: string | undefined;
    health: number = 0;
    special: number = 0;
    strength: number = 0;
    name: string = "Arnold";
    level?: number | undefined;

    public Figher(health : number, special : number,strength : number , name : string, level : number, prompt : string ){
        this.health = health;
        this.special = special;
        this.strength = strength;
        this.name = name;
        this.level = level;
        this.prompt = prompt;

    }

    
   


}

export default Fighter;