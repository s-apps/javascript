class Thermostat {
    constructor(temperature){
        this._temperature = temperature;
    }

    get temperature(){
        return 5/9 * (this._temperature - 32);
    }
    
    set temperature(temperature){
        this._temperature = temperature * 9.0 / 5 + 32;
    }
    
}

const thermos = new Thermostat(76); //Setting in Fahrenheit 
let temp = thermos.temperature;
console.log('celsius', temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log('celsius', temp);
