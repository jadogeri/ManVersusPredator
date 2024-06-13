class Contestant {
    private prompt : string;
    private health: number;
    private special : number;
    private strength : number;
    private name : string;
    private level : number ;

    public constructor(health : number, special : number,strength : number , name : string, level : number, prompt : string ){
        this.health = health;
        this.special = special;
        this.strength = strength;
        this.name = name;
        this.level = level;
        this.prompt = prompt;

    }

    public setHealth(health : number) : void {
        
        this.health = health;
    }

    public getHealth() : number {

        return this.health;
    }

    public setSpecial(special : number) : void {
        
        this.special = special;
    }

    public getSpecial() : number {

        return this.special;
    }

    public setStrength(strength : number) : void {
        
        this.strength = strength;
    }

    public getStrength() : number {

        return this.strength;
    }

    public setName(name : string) : void {
        
        this.name = name;
    }

    public getName() : string {

        return this.name;
    }

    public setLevel(level : number) : void {
        
        this.level = level;
    }

    public getLevel() : number {

        return this.level;
    }

    public setPrompt(prompt : string) : void {
        
        this.prompt = prompt;
    }

    public getPrompt() : string {

        return this.prompt;
    }


}

export default Contestant