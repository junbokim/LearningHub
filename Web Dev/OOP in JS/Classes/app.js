class Color{
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    getrgb(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    } 

    hex(){
        const {r,g,b} = this;
        return ('#' + ( (1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1));
    }
}

const c1 = new Color(10,35,200, 'skyblue');
