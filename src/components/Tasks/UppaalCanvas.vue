<template>
  <div class="canvas-container">
    <canvas id="myCanvas" width="1000" height="550" @click="handleCanvasClick">
      <div>
        hello
      </div>
    </canvas>
  </div>
</template>

<script>
import Node from "@/components/Tasks/UppaalElements/Node";
export default {
  name: 'UppaalCanvas',
  data() {
    return {
      canvas: null,
      context: null,
      nodes: [],
      links: []
    }
  },
  mounted() {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d")
  },
  methods: {
    getMousePos(evt) {
      var rect = this.canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    },
    handleCanvasClick(evt) {
      let pos = this.getMousePos(evt);
      let node = new Node(pos.x, pos.y, 5)
      this.nodes.push(node)
      this.drawCanvas()
    },
    drawCanvas() {
      this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
      this.context.save();

      for(var i = 0; i < this.nodes.length; i++) {
        this.context.lineWidth = 1;
        this.context.fillStyle = this.context.strokeStyle = 'blue';
        this.nodes[i].draw(this.context);
      }
    },
    selectObject(x, y) {
      for(var ii = 0; ii < this.nodes.length; ii++) {
        if(this.nodes[ii].containsPoint(x, y)) {
          return this.nodes[ii];
        }
      }
      for(var iii = 0; iii < this.links.length; iii++) {
        if(this.links[iii].containsPoint(x, y)) {
          return this.links[iii];
        }
      }
      return null;
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