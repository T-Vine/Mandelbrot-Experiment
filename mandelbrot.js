function loop(iterations, steps, ctx) {
    let radius = (window.innerHeight);
    let comp = [];
    let newIm, newRe, x, flag, within;
    let marked = [];
    //re = toString(re);
    //im = toString(im);
    for (let i=-0.8; i<-0.7; i+=steps) {
        for (let r=0.05; r<0.15; r+=steps) {
            ctx.fillStyle = "black";
            x = 0;
            comp = [];
            if (Math.sqrt(((i/2 * radius)**2 + (r/2 * radius)**2)) > radius) {
                
                continue;
            } else { // Only run if point is not outside of the circle.
                flag = true;
                
                while (x < iterations) {
                    if (x===0){
                        comp.push(i);
                        comp.push(r);
                    }
                    newRe = (comp[0]*comp[[0]]) - (comp[1]*(comp[1]));
                    newIm = 2*(comp[0]*comp[1]);
                    newRe = newRe+i;
                    newIm = newIm+r;
                    if (Math.abs(newIm) > 2 || Math.abs(newRe) > 2) {
                        flag = false;
                        break;
                    }
                    comp = [];
                    comp.push(newRe);
                    comp.push(newIm);
                    x++;
                }
                if (flag) {
                    /*
                    within = (comp[0]**2 + comp[1]**2)-(i**2 + r**2);
                    console.log(within);
                    if (within < 0) {
                        ctx.fillStyle = "#4b0082";
                    } else if (within >= 0.01) {
                        ctx.fillStyle = "blue";
                    } */
                    ctx.fillRect(i/-0.7/0.1 * radius - 6000,  r/0.15*1.25 * radius - 170, 1,1);
                    //console.log(i/-0.15*1.2 * radius);
                } else if (x < 5) {
                    ctx.fillStyle = "#875709";
                    ctx.fillRect(i/-0.7/0.1 * radius - 6000,r/0.15*1.25 * radius -170, 1,1);
                } 
                else if (x >= 5 && x < 15) {
                    ctx.fillStyle = "#783905";
                    ctx.fillRect(i/-0.7/0.1 * radius - 6000, r/0.15*1.25  * radius-170, 1,1);
                } else if (x >= 15) {
                    ctx.fillStyle = "#fcba03";
                    //ctx.fillRect(i/-0.7/0.5  * radius - 400, r/0.15/0.5 * radius, 1,1);
                } 
            }
        }
    }
}

function axes(ctx) {
    let midPointX = window.innerWidth/2;
    let midPointY = window.innerHeight/2;
    let radius = midPointY/1.5;

    ctx.beginPath();
    ctx.moveTo(midPointX, midPointY+radius);
    ctx.lineTo(midPointX, midPointY-radius);
    ctx.moveTo(midPointX+radius, midPointY);
    ctx.lineTo(midPointX-radius, midPointY);
    ctx.arc(midPointX, midPointY, radius, 0, Math.PI * 2);

    // Labels
    ctx.fillText("2", midPointX+radius+5, midPointY+5);
    ctx.fillText("-2", midPointX-radius-20, midPointY+5);
    ctx.fillText("-2i", midPointX-10, midPointY+radius+20);
    ctx.fillText("2i", midPointX-5, midPointY-radius-5);

    ctx.stroke();
}



let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "black";
ctx.font = "18px serif";
//axes(ctx);
loop(200, 0.00005 , ctx);
//4/(canvas.width*1)