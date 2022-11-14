import Utils from "@/components/Tasks/UppaalElements/Utils";

class StartLink {
    constructor(node, start) {
        this.node = node;
        this.deltaX = 0;
        this.deltaY = 0;
        this.text = '';
        this.utils = new Utils()

        if(start){
            this.setAnchorPoint(start.x, start.y)
        }
    }

    setAnchorPoint(x, y) {
        this.deltaX = x - this.node.x;
        this.deltaY = y - this.node.y;

        if(Math.abs(this.deltaX) < 6) {
            this.deltaX = 0;
        }

        if(Math.abs(this.deltaY) < 6) {
            this.deltaY = 0;
        }
    }

    getEndPoints () {
        let startX = this.node.x + this.deltaX;
        let startY = this.node.y + this.deltaY;
        let end = this.node.closestPointOnCircle(startX, startY);
        return {
            'startX': startX,
            'startY': startY,
            'endX': end.x,
            'endY': end.y,
        };
    }

    draw (c) {
        var stuff = this.getEndPoints();

        // draw the line
        c.beginPath();
        c.moveTo(stuff.startX, stuff.startY);
        c.lineTo(stuff.endX, stuff.endY);
        c.stroke();

        // draw the text at the end without the arrow
        //var textAngle = Math.atan2(stuff.startY - stuff.endY, stuff.startX - stuff.endX);
        //drawText(c, this.text, stuff.startX, stuff.startY, textAngle, selectedObject == this);

        // draw the head of the arrow
        this.utils.drawArrow(c, stuff.endX, stuff.endY, Math.atan2(-this.deltaY, -this.deltaX));
    }

    containsPoint (x, y) {
        let stuff = this.getEndPoints();
        let dx = stuff.endX - stuff.startX;
        let dy = stuff.endY - stuff.startY;
        let length = Math.sqrt(dx*dx + dy*dy);
        let percent = (dx * (x - stuff.startX) + dy * (y - stuff.startY)) / (length * length);
        let distance = (dx * (y - stuff.startY) - dy * (x - stuff.startX)) / length;
        return (percent > 0 && percent < 1 && Math.abs(distance) < 6);
    }
}

export default StartLink