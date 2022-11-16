import Utils from "@/components/Tasks/UppaalElements/Utils";

class Link {
    constructor(a, b, identifier) {
        this.nodeA = a;
        this.nodeB = b;
        this.text = '';
        this.lineAngleAdjust = 0; // value to add to textAngle when link is straight line
        this.parallelPart = 0.5; // percentage from nodeA to nodeB
        this.perpendicularPart = 0; // pixels from line between nodeA and nodeB
        this.utils = new Utils()
        this.to = this.nodeA.identifier.toString()
        this.from = this.nodeB.identifier.toString()
        this.identifier = identifier.toString()
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
}

export default Link