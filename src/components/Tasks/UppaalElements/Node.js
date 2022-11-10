class Node {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius
        this.mouseOffsetX = 0;
        this.mouseOffsetY = 0;
        this.text = '';
    }

    clostsPointOnCircle(x, y){
        var dx = x - this.x;
        var dy = y - this.y;
        var scale = Math.sqrt(dx * dx + dy * dy);
        return {
            'x': this.x + dx * this.radius / scale,
            'y': this.y + dy * this.radius / scale,
        };
    }

    setMouseStart(x, y) {
        this.mouseOffsetX = this.x - x;
        this.mouseOffsetY = this.y - y;
    }

    setAnchorPoint(x, y) {
        this.x = x + this.mouseOffsetX;
        this.y = y + this.mouseOffsetY;
    }

    containsPoint(x, y) {
        return (x - this.x)*(x - this.x) + (y - this.y)*(y - this.y) < this.radius*this.radius;
    }

    draw(context) {
        context.fillStyle = "#000000";
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, 2*Math.PI, false);
        context.stroke();
    }
}

export default Node