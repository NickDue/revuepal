class Node {
    constructor(x, y, radius, id) {
        this.x = x;
        this.y = y;
        this.radius = radius
        this.mouseOffsetX = 0;
        this.mouseOffsetY = 0;
        this.identifier = id;
        this.color ="#000000";
        this.name = '';
        this.invariant = ""
        this.exponential = ''
        this.initial = false;
        this.urgent = false;
        this.committed = false;
    }

    closestPointOnCircle(x, y){
        let dx = x - this.x;
        let dy = y - this.y;
        let scale = Math.sqrt(dx * dx + dy * dy);
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
        context.fillStyle = this.color;
        context.beginPath();
        //context.strokeStyle = this.color
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        context.stroke();

        this.drawText(context, this.name, this.x, this.y, null, Math.round(this.y) - this.radius - 3);
        this.drawText(context, this.invariant, this.x, this.y, null, Math.round(this.y) + this.radius + 10);

        if(this.initial) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius - 6, 0, 2 * Math.PI, false);
            context.stroke();
        }

        if(this.urgent) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius - 12, 0,  Math.PI, false);
            context.stroke();
        }

        if(this.committed) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius - 18, 0.5*Math.PI,  1.5*Math.PI, false);
            context.stroke();
        }
    }

    drawText(c, originalText, x, y, angleOrNull, placement) {
        c.font = '15px "Times New Roman", serif';
        let width = c.measureText(originalText).width;

        // center the text
        x -= width / 2;

        // position the text intelligently if given an angle
        if(angleOrNull != null) {
            let cos = Math.cos(angleOrNull);
            let sin = Math.sin(angleOrNull);
            let cornerPointX = (width / 2 + 5) * (cos > 0 ? 1 : -1);
            let cornerPointY = (10 + 5) * (sin > 0 ? 1 : -1);
            let slide = sin * Math.pow(Math.abs(sin), 40) * cornerPointX - cos * Math.pow(Math.abs(cos), 10) * cornerPointY;
            x += cornerPointX - sin * slide;
            y += cornerPointY + cos * slide;
        }

        x = Math.round(x);
        c.fillText(originalText, x, placement);
    }

    convertToXML () {
        let all = `<location id='${this.identifier}' x='${this.x}' y='${this.y}'>`
        if (this.name !== "")
            all += `<name x='${this.x}' y='${Math.round(this.y) - this.radius - 3}'>${this.name}</name>`;
        if (this.invariant !== "")
            all += `<label kind='invariant' x='${this.x}' y='${Math.round(this.y) + this.radius + 10}'>${this.invariant}</label>`
        if (this.exponential !== "")
            all += `<label kind='exponentialrate' x='${this.x}' y='${Math.round(this.y) + this.radius + 10}'>${this.exponential}</label>`
        if (this.urgent)
            all += '<urgent/>'
        if (this.committed)
            all += '<committed/>'
        all += '</location>'

        return all
    }
}

export default Node