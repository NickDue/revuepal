import Utils from "@/components/Tasks/UppaalElements/Utils";

class SelfLink {
    constructor(node, mouse, radius, identifier) {
        this.node = node;
        this.anchorAngle = 0;
        this.mouseOffsetAngle = 0;
        this.radius = radius
        this.utils = new Utils()
        this.to = this.node.identifier.toString()
        this.from = this.node.identifier.toString()
        this.identifier = identifier.toString();
        this.select = "";
        this.guard = "";
        this.sync = "";
        this.update = ""

        if(mouse) {
            this.setAnchorPoint(mouse.x, mouse.y);
        }
    }

    setMouseStart(x, y) {
        this.mouseOffsetAngle = this.anchorAngle - Math.atan2(y - this.node.y, x - this.node.x);
    }

    setAnchorPoint(x, y) {
        this.anchorAngle = Math.atan2(y - this.node.y, x - this.node.x) + this.mouseOffsetAngle;
        // snap to 90 degrees
        let snap = Math.round(this.anchorAngle / (Math.PI / 2)) * (Math.PI / 2);
        if(Math.abs(this.anchorAngle - snap) < 0.1) this.anchorAngle = snap;
        // keep in the range -pi to pi so our containsPoint() function always works
        if(this.anchorAngle < -Math.PI) this.anchorAngle += 2 * Math.PI;
        if(this.anchorAngle > Math.PI) this.anchorAngle -= 2 * Math.PI;
    }

    getEndPointsAndCircle() {
        let circleX = this.node.x + 1.5 * this.radius * Math.cos(this.anchorAngle);
        let circleY = this.node.y + 1.5 * this.radius * Math.sin(this.anchorAngle);
        let circleRadius = 0.75 * this.radius;
        let startAngle = this.anchorAngle - Math.PI * 0.8;
        let endAngle = this.anchorAngle + Math.PI * 0.8;
        let startX = circleX + circleRadius * Math.cos(startAngle);
        let startY = circleY + circleRadius * Math.sin(startAngle);
        let endX = circleX + circleRadius * Math.cos(endAngle);
        let endY = circleY + circleRadius * Math.sin(endAngle);
        return {
            'hasCircle': true,
            'startX': startX,
            'startY': startY,
            'endX': endX,
            'endY': endY,
            'startAngle': startAngle,
            'endAngle': endAngle,
            'circleX': circleX,
            'circleY': circleY,
            'circleRadius': circleRadius
        };
    }

    draw(c) {
        var stuff = this.getEndPointsAndCircle();
        // draw arc
        c.beginPath();
        c.arc(stuff.circleX, stuff.circleY, stuff.circleRadius, stuff.startAngle, stuff.endAngle, false);
        c.stroke();
        // draw the head of the arrow
        this.utils.drawArrow(c, stuff.endX, stuff.endY, stuff.endAngle + Math.PI * 0.4);
        let textX = stuff.circleX + stuff.circleRadius * Math.cos(this.anchorAngle);
        let textY = stuff.circleY + stuff.circleRadius * Math.sin(this.anchorAngle);
        this.drawText(c, this.guard, textX, textY, this.anchorAngle, textY-5);
    }

    containsPoint(x, y){
        let stuff = this.getEndPointsAndCircle();
        let dx = x - stuff.circleX;
        let dy = y - stuff.circleY;
        let distance = Math.sqrt(dx*dx + dy*dy) - stuff.circleRadius;
        return (Math.abs(distance) < 6);
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

        // draw text and caret (round the coordinates so the caret falls on a pixel)

        x = Math.round(x);
        c.fillText(originalText, x, placement);

    }
}

export default SelfLink