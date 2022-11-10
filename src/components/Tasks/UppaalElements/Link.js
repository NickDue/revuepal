class Link {
    constructor(a, b) {
        this.nodeA = a;
        this.nodeB = b;
        this.text = '';
        this.lineAngleAdjust = 0; // value to add to textAngle when link is straight line
        this.parallelPart = 0.5; // percentage from nodeA to nodeB
        this.perpendicularPart = 0; // pixels from line between nodeA and nodeB
    }
}

export default Link