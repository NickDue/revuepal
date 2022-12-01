import Utils from "@/components/Tasks/UppaalElements/Utils";

class Link {
    constructor(a, b, identifier) {
        this.nodeA = a;
        this.nodeB = b;
        this.lineAngleAdjust = 0; // value to add to textAngle when link is straight line
        this.parallelPart = 0.5; // percentage from nodeA to nodeB
        this.perpendicularPart = 0; // pixels from line between nodeA and nodeB
        this.utils = new Utils()
        this.from = this.nodeA.identifier.toString()
        this.to = this.nodeB.identifier.toString()
        this.identifier = identifier.toString()
        this.select = "";
        this.guard = "";
        this.sync = "";
        this.update = ""
        this.x = 0
    }

    getAnchorPoint () {
        let dx = this.nodeB.x - this.nodeA.x;
        let dy = this.nodeB.y - this.nodeA.y;
        let scale = Math.sqrt(dx * dx + dy * dy);
        return {
            'x': this.nodeA.x + dx * this.parallelPart - dy * this.perpendicularPart / scale,
            'y': this.nodeA.y + dy * this.parallelPart + dx * this.perpendicularPart / scale
        };
    }

    setAnchorPoint (x, y) {
        let dx = this.nodeB.x - this.nodeA.x;
        let dy = this.nodeB.y - this.nodeA.y;
        let scale = Math.sqrt(dx * dx + dy * dy);
        this.parallelPart = (dx * (x - this.nodeA.x) + dy * (y - this.nodeA.y)) / (scale * scale);
        this.perpendicularPart = (dx * (y - this.nodeA.y) - dy * (x - this.nodeA.x)) / scale;
        // snap to a straight line
        if(this.parallelPart > 0 && this.parallelPart < 1 && Math.abs(this.perpendicularPart) < 6) {
            this.lineAngleAdjust = (this.perpendicularPart < 0) * Math.PI;
            this.perpendicularPart = 0;
        }
    }

    getEndPointsAndCircle () {
        if(this.perpendicularPart === 0) {
            let midX = (this.nodeA.x + this.nodeB.x) / 2;
            let midY = (this.nodeA.y + this.nodeB.y) / 2;
            let start = this.nodeA.closestPointOnCircle(midX, midY);
            let end = this.nodeB.closestPointOnCircle(midX, midY);
            return {
                'hasCircle': false,
                'startX': start.x,
                'startY': start.y,
                'endX': end.x,
                'endY': end.y,
            };
        }
        let anchor = this.getAnchorPoint();
        let circle = this.utils.circleFromThreePoints(this.nodeA.x, this.nodeA.y, this.nodeB.x, this.nodeB.y, anchor.x, anchor.y);
        let isReversed = (this.perpendicularPart > 0);
        let reverseScale = isReversed ? 1 : -1;
        let startAngle = Math.atan2(this.nodeA.y - circle.y, this.nodeA.x - circle.x) - reverseScale * 18 / circle.radius;
        let endAngle = Math.atan2(this.nodeB.y - circle.y, this.nodeB.x - circle.x) + reverseScale * 18 / circle.radius;
        let startX = circle.x + circle.radius * Math.cos(startAngle);
        let startY = circle.y + circle.radius * Math.sin(startAngle);
        let endX = circle.x + circle.radius * Math.cos(endAngle);
        let endY = circle.y + circle.radius * Math.sin(endAngle);
        return {
            'hasCircle': true,
            'startX': startX,
            'startY': startY,
            'endX': endX,
            'endY': endY,
            'startAngle': startAngle,
            'endAngle': endAngle,
            'circleX': circle.x,
            'circleY': circle.y,
            'circleRadius': circle.radius,
            'reverseScale': reverseScale,
            'isReversed': isReversed,
        };
    }

    draw (c) {
        let stuff = this.getEndPointsAndCircle();
        // draw arc
        c.beginPath();
        if(stuff.hasCircle) {
            c.arc(stuff.circleX, stuff.circleY, stuff.circleRadius, stuff.startAngle, stuff.endAngle, stuff.isReversed);
        } else {
            c.moveTo(stuff.startX, stuff.startY);
            c.lineTo(stuff.endX, stuff.endY);
        }
        c.stroke();
        // draw the head of the arrow
        if(stuff.hasCircle) {
            this.utils.drawArrow(c, stuff.endX, stuff.endY, stuff.endAngle - stuff.reverseScale * (Math.PI / 2));
        } else {
            this.utils.drawArrow(c, stuff.endX, stuff.endY, Math.atan2(stuff.endY - stuff.startY, stuff.endX - stuff.startX));
        }

        // draw the text
        let textX = (stuff.startX + stuff.endX) / 2;
        this.textY = (stuff.startY + stuff.endY) / 2;
        let textAngle = Math.atan2(stuff.endX - stuff.startX, stuff.startY - stuff.endY);
        this.drawText(c, this.guard, textX, this.textY, textAngle + this.lineAngleAdjust,  this.textY-5);


    }

    containsPoint(x, y) {
        var stuff = this.getEndPointsAndCircle();
        if(stuff.hasCircle) {
            let dx = x - stuff.circleX;
            let dy = y - stuff.circleY;
            let distance = Math.sqrt(dx*dx + dy*dy) - stuff.circleRadius;
            if(Math.abs(distance) < 6) {
                let angle = Math.atan2(dy, dx);
                let startAngle = stuff.startAngle;
                let endAngle = stuff.endAngle;
                if(stuff.isReversed) {
                    let temp = startAngle;
                    startAngle = endAngle;
                    endAngle = temp;
                }
                if(endAngle < startAngle) {
                    endAngle += Math.PI * 2;
                }
                if(angle < startAngle) {
                    angle += Math.PI * 2;
                } else if(angle > endAngle) {
                    angle -= Math.PI * 2;
                }
                return (angle > startAngle && angle < endAngle);
            }
        } else {
            let dx = stuff.endX - stuff.startX;
            let dy = stuff.endY - stuff.startY;
            let length = Math.sqrt(dx*dx + dy*dy);
            let percent = (dx * (x - stuff.startX) + dy * (y - stuff.startY)) / (length * length);
            let distance = (dx * (y - stuff.startY) - dy * (x - stuff.startX)) / length;
            return (percent > 0 && percent < 1 && Math.abs(distance) < 6);
        }
        return false;
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

        this.x = Math.round(x);
        c.fillText(originalText, this.x, placement);
    }

    convertToXML() {
        let all = "<transition>"
        all += `<source ref='${this.from}'/>`
        all += `<target ref='${this.to}'/>`
        if (this.select !== "")
            all += `<label kind='select' x='${this.x}' y='${this.textY-5}'>${this.select.replace("<", "&lt;").replace(">", "&gt;")}</label>`
        if (this.guard !== "")
            all += `<label kind='guard' x='${this.x}' y='${this.textY-5}'>${this.guard.replace("<", "&lt;").replace(">", "&gt;")}</label>`
        if (this.sync !== "")
            all += `<label kind='synchronisation' x='${this.x}' y='${this.textY-5}'>${this.sync.replace("<", "&lt;").replace(">", "&gt;")}</label>`
        if (this.update !== "")
            all += `<label kind='assignment' x='${this.x}' y='${this.textY-5}'>${this.update.replace("<", "&lt;").replace(">", "&gt;")}</label>`
        all += "</transition>"

        return all
    }
}

export default Link