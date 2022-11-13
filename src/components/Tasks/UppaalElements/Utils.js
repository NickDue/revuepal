class CanvasUtils {
    getMousePos(event, canvas) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    selectObject(x, y, nodes, links) {
        for(let i = 0; i < nodes.length; i++) {
            if(nodes[i].containsPoint(x, y)) {
                return nodes[i];
            }
        }
        for(let i = 0; i < links.length; i++) {
            if(links[i].containsPoint(x, y)) {
                return links[i];
            }
        }
        return null;
    }

    crossBrowserElementPos(e) {
        let obj = e.target || e.srcElement;
        let x = 0, y = 0;
        while(obj.offsetParent) {
            x += obj.offsetLeft;
            y += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return { 'x': x, 'y': y };
    }

    crossBrowserMousePos(e) {
        return {
            'x': e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
            'y': e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop,
        };
    }

    crossBrowserRelativeMousePos(e) {
        let element = this.crossBrowserElementPos(e);
        let mouse = this.crossBrowserMousePos(e);
        return {
            'x': mouse.x - element.x,
            'y': mouse.y - element.y
        };
    }

    drawArrow(c, x, y, angle) {
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x - 8 * dx + 5 * dy, y - 8 * dy - 5 * dx);
        c.lineTo(x - 8 * dx - 5 * dy, y - 8 * dy + 5 * dx);
        c.fill();
    }

    circleFromThreePoints(x1, y1, x2, y2, x3, y3) {
        var a = this.det(x1, y1, 1, x2, y2, 1, x3, y3, 1);
        var bx = -this.det(x1*x1 + y1*y1, y1, 1, x2*x2 + y2*y2, y2, 1, x3*x3 + y3*y3, y3, 1);
        var by = this.det(x1*x1 + y1*y1, x1, 1, x2*x2 + y2*y2, x2, 1, x3*x3 + y3*y3, x3, 1);
        var c = -this.det(x1*x1 + y1*y1, x1, y1, x2*x2 + y2*y2, x2, y2, x3*x3 + y3*y3, x3, y3);
        return {
            'x': -bx / (2*a),
            'y': -by / (2*a),
            'radius': Math.sqrt(bx*bx + by*by - 4*a*c) / (2*Math.abs(a))
        };
    }

    det(a, b, c, d, e, f, g, h, i) {
        return a*e*i + b*f*g + c*d*h - a*f*h - b*d*i - c*e*g;
    }
}

export default CanvasUtils

