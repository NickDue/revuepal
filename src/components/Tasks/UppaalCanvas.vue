<template>
  <div class="canvas-container">
    <canvas id="myCanvas" width="1000" height="550" @keydown="handleKeyDown" @keyup="handleKeyUp" tabindex="1" @click="handleLeftClick" @mousemove="handleMouseMove">
    </canvas>
  </div>
</template>

<script>
import Node from "@/components/Tasks/UppaalElements/Node";
import CanvasUtils from "@/components/Tasks/UppaalElements/Utils";
import TemporaryLink from "@/components/Tasks/UppaalElements/TemporaryLink";
import StartLink from "@/components/Tasks/UppaalElements/StartLink";
import Link from "@/components/Tasks/UppaalElements/Link";
import SelfLink from "@/components/Tasks/UppaalElements/SelfLink";
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
      movingObject: false,
      altDown: false,
      nodeIdentifier: 0,
      linkIdentifier: 0,
      targetNode: null
    }
  },
  mounted() {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d")
    this.utils = new CanvasUtils()
  },
  methods: {
    handleKeyDown(e) {
      if (e.altKey)
        this.altDown = true
      if (e.keyCode === 27) {
        this.currentLink = null;
        this.selectedObject = null;
        this.drawCanvas()
      }
      if (e.keyCode === 8 && this.selectedObject != null){
        e.preventDefault()
        if (this.selectedObject instanceof Node) {
          let newNodes = []
          let newLinks = []
          for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].identifier !== this.selectedObject.identifier)
              newNodes.push(this.nodes[i])
          }
          for (let i = 0; i < this.links.length; i++) {
            if (this.links[i].to !== this.selectedObject.identifier.toString() && this.links[i].from !== this.selectedObject.identifier.toString())
              newLinks.push(this.links[i])
          }
          this.nodes = newNodes
          this.links = newLinks
        } else if (this.selectedObject instanceof Link || this.selectedObject instanceof SelfLink){
          let newLinks = []

          this.links = newLinks
        }
      }
      this.drawCanvas()
      console.log(e.keyCode)
    },
    handleKeyUp(e) {
      if (e.keyCode === 18) // 18 = altKey
        this.altDown = false
    },
    handleLeftClick(e) {
      let mouse = this.utils.crossBrowserRelativeMousePos(e)
      this.selectedObject = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links)
      if (this.altDown && this.currentLink == null){
        if (this.selectedObject == null) {
          this.nodes.push(new Node(mouse.x, mouse.y, 18, this.nodeIdentifier))
          this.nodeIdentifier++
        } else {
          this.originalClick = mouse
          this.selectedObject = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links)
          this.currentLink = new TemporaryLink(mouse, mouse)
        }
      } else {
        if (this.selectedObject != null) {
          //this.movingObject = false;

          if(this.currentLink != null) {
            if(!(this.currentLink instanceof TemporaryLink) && this.targetNode != null) {
              this.links.push(this.currentLink);
              for (let i = 0; i < this.links.length; i++)
                console.log("" + this.currentLink.to + " " + this.currentLink.from)
            }
            this.currentLink = null;
          }
        }
      }
      this.drawCanvas()
    },
    handleMouseMove(e) {
      let mouse = this.utils.crossBrowserRelativeMousePos(e);

      if(this.currentLink != null) {
        this.targetNode = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links);
        if(!(this.targetNode instanceof Node)) {
          this.targetNode = null;
        }

        if(this.selectedObject == null) {
          if(this.targetNode != null) {
            this.currentLink = new StartLink(this.targetNode, this.originalClick, this.linkIdentifier);
            this.linkIdentifier++
          } else {
            this.currentLink = new TemporaryLink(this.originalClick, mouse);
          }
        } else {
          if (this.targetNode === this.selectedObject) {
            this.currentLink = new SelfLink(this.selectedObject, mouse, 18, this.linkIdentifier)
            this.linkIdentifier++
          } else if(this.targetNode != null) {
            this.currentLink = new Link(this.selectedObject, this.targetNode, this.linkIdentifier);
            this.linkIdentifier++
          } else {
            this.currentLink = new TemporaryLink(this.selectedObject.closestPointOnCircle(mouse.x, mouse.y), mouse);
            this.originalClick = this.selectedObject.closestPointOnCircle(mouse.x, mouse.y)
          }
        }
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
        this.context.fillStyle = this.context.strokeStyle = (this.links[i] === this.selectedObject) ? 'blue' : 'black';
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