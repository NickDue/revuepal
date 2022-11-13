<template>
  <div class="canvas-container">
    <canvas id="myCanvas" width="1000" height="550" @dblclick="doubleClickHandler" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
    </canvas>
  </div>
</template>

<script>
import Node from "@/components/Tasks/UppaalElements/Node";
import CanvasUtils from "@/components/Tasks/UppaalElements/Utils";
import TemporaryLink from "@/components/Tasks/UppaalElements/TemporaryLink";
import StartLink from "@/components/Tasks/UppaalElements/StartLink";
import Link from "@/components/Tasks/UppaalElements/Link";
export default {
  name: 'UppaalCanvas',
  data() {
    return {
      canvas: null,
      context: null,
      nodes: [],
      links: [],
      utils: null,
      currentLink: null,
      selectedObject: null,
      originalClick: null,
      movingObject: false
    }
  },
  mounted() {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d")
    this.utils = new CanvasUtils()
  },
  methods: {
    doubleClickHandler(e) {
      let mouse = this.utils.crossBrowserRelativeMousePos(e)
      this.selectedObject = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links)
      if (this.selectedObject == null) {
        this.nodes.push(new Node(mouse.x, mouse.y, 18))
        this.drawCanvas()
      }
      this.selectedObject = null
    },
    handleMouseDown(e){
      let mouse = this.utils.crossBrowserRelativeMousePos(e)
      this.originalClick = mouse
      this.selectedObject = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links)
      if (this.selectedObject != null) {
        this.currentLink = new TemporaryLink(mouse, mouse)
      }
    },
    handleMouseMove(e) {
      let mouse = this.utils.crossBrowserRelativeMousePos(e);

      if(this.currentLink != null) {
        var targetNode = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links);
        if(!(targetNode instanceof Node)) {
          targetNode = null;
        }

        if(this.selectedObject == null) {
          if(targetNode != null) {
            this.currentLink = new StartLink(targetNode, this.originalClick);
          } else {
            this.currentLink = new TemporaryLink(this.originalClick, mouse);
          }
        } else {
          if(targetNode == this.selectedObject) {
            //this.currentLink = new SelfLink(this.selectedObject, mouse);
          } else if(targetNode != null) {
            this.currentLink = new Link(this.selectedObject, targetNode);
          } else {
            this.currentLink = new TemporaryLink(this.selectedObject.closestPointOnCircle(mouse.x, mouse.y), mouse);
          }
        }
        this.drawCanvas();
      }
    },
    handleMouseUp(e) {
      e.preventDefault()
      this.movingObject = false;

      if(this.currentLink != null) {
        if(!(this.currentLink instanceof TemporaryLink)) {
          this.selectedObject = this.currentLink;
          this.links.push(this.currentLink);
        }
        this.currentLink = null;
        this.drawCanvas();
      }
    },
    drawCanvas() {
      this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
      this.context.save();

      for(let i = 0; i < this.nodes.length; i++) {
        this.context.lineWidth = 1;
        this.context.fillStyle = this.context.strokeStyle = 'blue';
        this.nodes[i].draw(this.context);
      }
      for(let i = 0; i < this.links.length; i++) {
        this.context.lineWidth = 1;
        this.context.fillStyle = this.context.strokeStyle = (this.links[i] == this.selectedObject) ? 'blue' : 'black';
        this.links[i].draw(this.context);
      }
      if(this.currentLink != null) {
        this.context.lineWidth = 1;
        this.context.fillStyle = this.context.strokeStyle = 'black';
        this.currentLink.draw(this.context);
      }

      this.context.restore();
    }
  }
}


</script>

<style scoped>
.canvas-container {
  height: 555px;
  width: 100%;
}

#myCanvas {
  border: 1px solid black;
}

</style>