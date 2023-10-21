function main() {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    // Setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.strokeStyle = "black";
    axes(ctx);
}
function axes(ctx) {
    midPointX = window.innerWidth/2;
    midPointY = window.innerHeight/2;
    ctx.beginPath();
    ctx.moveTo(midPointX, 0);
    ctx.lineTo(midPointX, window.innerHeight);
    ctx.moveTo(0, midPointY);
    ctx.lineTo(window.innerWidth, midPointY);
    // Radius-2 Circle from the centre. This is to scale with a scale factor of 1/3 the height. 
    let radius = midPointY/1.5;
    //ctx.moveTo(midPointX, midPointY);
    ctx.arc(midPointX, midPointY, radius, 0, Math.PI * 2);
    ctx.stroke();
/*
    // First flag to move to.
    ctx.fillRect(10 + midPointX, 10 + midPointY, 5, 5); // 10 + 10i
    let x = 0.3;
    let y = 0.2;
    let com = new Complex(x, y);
    com.square();
    console.log(com);
    ctx.fillRect(com.getRe()/2*radius+midPointX, com.getIm()/2*radius+midPointY, 5, 5);
    //com.toComp(newCom);
    ctx.stroke();  */
}
class Complex {
    constructor(re, im) {
        this.re = re;
        this.im = im;
        this.string = this.toString();
    }
    toComp(comp) {
        this.im = parseFloat(comp).toString();
        this.re = parseFloat(comp.slice(comp.indexOf(this.im)+this.im.length+1)); // Removing sign and rest of this.re
        this.string = this.toString();
    }
    toString() {
        //return this.im === 1 ? this.re + "+"+ "i": this.re + "+" + this.im +"i";
        return this.re + "+" + this.im +"i";
    }
    toNum() {
        // -2i or 2i is equal to the squareroot of -4.
        return this.re+""+this.im;
    }
    static multiply(com1, com2) {
        
    }
    getIm() {
        return this.im;
    }
    getRe() {
        return this.re;
    }
    square() {
        let square = ((this.re*this.re)-(this.im*this.im)).toString()+"+"+(2*this.re*this.im).toString()+"i";
        this.re = ((this.re*this.re)-(this.im*this.im));
        this.im = (2*this.re*this.im);
        console.log(this.im);
        return square;
    }
}
main();
//let com1 = new Complex(0.5, -0.5); 
//let com2 = new Complex(3, 2); // 3 + 2i

//-2 to 1/4