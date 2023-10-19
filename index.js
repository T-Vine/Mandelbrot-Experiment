function main() {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    // Setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.strokeStyle = "white";
    grid(ctx, canvas);
}
function grid(ctx, canvas, cellSize=30) {
    ctx.beginPath();
    for (let x = cellSize; x < canvas.width; x += cellSize) {
        for (let y = cellSize; y < canvas.height; y += cellSize) {
            ctx.moveTo(0,y);
            ctx.lineTo(x+canvas.width, y);
            ctx.moveTo(x,0);
            ctx.lineTo(x, y+canvas.height);
            ctx.stroke();
        }
    }
}
main();