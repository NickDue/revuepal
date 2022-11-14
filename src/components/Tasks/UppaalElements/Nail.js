class Nail {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mouseOffsetX = 0;
        this.mouseOffsetY = 0;
    }

    closestPointOnCircle(x, y){
        var dx = x - this.x;
        var dy = y - this.y;
        var scale = Math.sqrt(dx * dx + dy * dy);
        return {
            'x': this.x + dx * this.radius / scale,
            'y': this.y + dy * this.radius / scale,
        };
    }

    containsPoint(x, y) {
        return (x - this.x)*(x - this.x) + (y - this.y)*(y - this.y) < this.radius*this.radius;
    }

    draw(context) {
        context.fillStyle = "#000000";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        context.stroke();
    }
}

export default Nail