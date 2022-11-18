<template>
  <div class="canvas-container">
    <canvas id="myCanvas" width="1000" height="550" @keydown="handleKeyDown" @keyup="handleKeyUp" tabindex="1" @click="handleLeftClick" @mousemove="handleMouseMove">
    </canvas>
    <div class="optionsContainer">
      <h4>
        Options
      </h4>
      <div class="node-chosen" v-if="selectedObject !== null && linkChosen === false && !altDown && currentLink === null">
        <div class="name-field only-name">
          <h5>
            Name
          </h5>
          <input id="item-name" v-model="name">
        </div>
        <div class="name-field">
          <h5>
            Invariant
          </h5>
          <textarea id="item-invariant" class="input-texts" rows="5" v-model="invariant"></textarea>
        </div>
        <div class="name-field">
          <h5>
            Rate of exponential
          </h5>
          <textarea id="item-exponential" class="input-texts" rows="5" v-model="exponential"></textarea>
        </div>
        <div class="checkbox-field">
          <input type="checkbox" id="check-initial" v-model="initial">
          <h5>
            Initial
          </h5>
        </div>
        <div class="checkbox-field">
          <input type="checkbox" id="check-urgent" v-model="urgent">
          <h5>
            Urgent
          </h5>
        </div>
        <div class="checkbox-field">
          <input type="checkbox" id="check-committed" v-model="committed">
          <h5>
            Committed
          </h5>
        </div>
        <button @click="saveOptionsForObject">
          Save
        </button>
      </div>
      <div class="link-chosen" v-if="selectedObject !== null && linkChosen === true">
        <div class="name-field">
          <h5>
            Select
          </h5>
          <textarea id="item-select" class="input-texts is-link" rows="5" v-model="select"></textarea>
        </div>
        <div class="name-field">
          <h5>
            Guard
          </h5>
          <textarea id="item-guard" class="input-texts is-link" rows="5" v-model="guard"></textarea>
        </div>
        <div class="name-field">
          <h5>
            Sync
          </h5>
          <textarea id="item-sync" class="input-texts is-link" rows="5" v-model="sync"></textarea>
        </div>
        <div class="name-field">
          <h5>
            Update
          </h5>
          <textarea id="item-update" class="input-texts is-link" rows="5" v-model="update"></textarea>
        </div>
        <button @click="saveOptionsForObject">
          Save
        </button>
      </div>
    </div>
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
      targetNode: null,
      linkChosen: false,
      name: '',
      invariant: '',
      exponential: '',
      initial: false,
      urgent: false,
      committed: false,
      select: '',
      guard: '',
      sync: '',
      update: ''
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
          this.nodes.push(new Node(mouse.x, mouse.y, 25, this.nodeIdentifier))
          this.nodeIdentifier++
        } else {
          this.originalClick = mouse
          this.selectedObject = this.utils.selectObject(mouse.x, mouse.y, this.nodes, this.links)
          this.currentLink = new TemporaryLink(mouse, mouse)
        }
      } else {
        if (this.selectedObject != null) {
          //this.movingObject = false;
          if (this.selectedObject instanceof Link || this.selectedObject instanceof SelfLink){
            this.linkChosen = true
            this.updateOptionsContainer()
          }
          else {
            this.linkChosen = false
            this.updateOptionsContainer()
          }

          if(this.currentLink != null) {
            if(!(this.currentLink instanceof TemporaryLink) && this.targetNode != null) {
              this.links.push(this.currentLink);
            }
            this.currentLink = null;
            this.selectedObject = null
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
    },
    saveOptionsForObject () {
      if (this.linkChosen) {
        this.selectedObject.select = this.select;
        this.selectedObject.guard = this.guard;
        this.selectedObject.sync = this.sync;
        this.selectedObject.update = this.update;
        this.overrideObjects()
      }
      else {
        this.selectedObject.name = this.name
        this.selectedObject.invariant = this.invariant
        this.selectedObject.exponential = this.exponential
        this.selectedObject.initial = this.initial
        this.selectedObject.urgent = this.urgent
        this.selectedObject.committed = this.committed
        this.overrideObjects()
      }
    },
    overrideObjects() {
      if(this.linkChosen){
        for (let i = 0; i < this.links.length; i++) {
          let newLinks = []
          for (let i = 0; i < this.links.length; i++) {
            if (this.links[i].identifier !== this.selectedObject.identifier)
              newLinks.push(this.links[i])
          }
          newLinks.push(this.selectedObject)
          this.links = newLinks
        }
      } else {
        let newNodes = []
        for (let i = 0; i < this.nodes.length; i++) {
          if (this.nodes[i].identifier !== this.selectedObject.identifier)
            newNodes.push(this.nodes[i])
        }
        newNodes.push(this.selectedObject)
        this.nodes = newNodes
      }
      this.drawCanvas()
    },
    updateOptionsContainer() {
      if (this.linkChosen) {
        this.select = this.selectedObject.select
        this.guard = this.selectedObject.guard
        this.sync = this.selectedObject.sync
        this.update = this.selectedObject.update
      }
      else {
        this.name = this.selectedObject.name
        this.invariant = this.selectedObject.invariant
        this.exponential = this.selectedObject.exponential
        this.initial = this.selectedObject.initial
        this.urgent = this.selectedObject.urgent
        this.committed = this.selectedObject.committed
      }


    }
  }
}


</script>

<style scoped>
.canvas-container {
  height: 555px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.optionsContainer {
  display: block;
  border: 1px solid black;
  width: 20%;
  height: 550px;
  margin-left: 20px;
}

h4 {
  margin-top: 2px;
  padding-bottom: 2px;
  border-bottom: 1px solid black;
  margin-bottom: 0;
}

h5 {
  margin: 0;
}

.name-field{
  display: flex;
  margin: 5px 2% 30px;
  height: 20%;
  flex-direction: column;
}

.checkbox-field {
  display: flex;
  margin-left: 2%;
}

#myCanvas {
  border: 1px solid black;
}

.input-texts {
  height: 200px;
}

.is-link {
  height: 60px;
}

.only-name {
  height: 20px;
}

.node-chosen {
  height: 100%;
}

button {
  margin: 2%;
}

</style>