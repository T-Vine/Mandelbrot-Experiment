function loop(iterations, steps, ctx) {
    let radius = (window.innerHeight)/2;
    let comp = [];
    let newIm, newRe, x, flag, within;
    let marked = [];
    //re = toString(re);
    //im = toString(im);
    for (let i=-2; i<2; i+=steps) {
        for (let r=-2; r<2; r+=steps) {
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
                        comp.push(-r);
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
                    comp.push(-newIm);
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
                    ctx.fillRect((window.innerWidth/2)+i/2 * radius,(window.innerHeight/2)-r/2 * radius, 2,2);
                } else if (x < 2) {
                    ctx.fillStyle = "#020024";
                    ctx.fillRect((window.innerWidth/2)+i/2 * radius,(window.innerHeight/2)-r/2 * radius, 2,2);
                } 
                else if (x >= 2 && x < 5) {
                    ctx.fillStyle = "#090979";
                    ctx.fillRect((window.innerWidth/2)+i/2 * radius,(window.innerHeight/2)-r/2 * radius, 2,2);
                } else if (x >= 5 && x < 10) {
                    ctx.fillStyle = "#0191b9";
                    ctx.fillRect((window.innerWidth/2)+i/2 * radius,(window.innerHeight/2)-r/2 * radius, 2,2);
                } else if (x >= 10) {
                    ctx.fillStyle = "#00d4ff";
                    ctx.fillRect((window.innerWidth/2)+i/2 * radius,(window.innerHeight/2)-r/2 * radius, 2,2);
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
loop(200, 4/(canvas.width*1), ctx);