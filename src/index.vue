<template>
  <section>
    <h1>{{ days }} Days of CSS</h1>
    <div class="content">
      <el-button icon="el-icon-arrow-left" circle @click="move(-1)"></el-button>
      <iframe :src="selectedItem.id + '/index.html'"></iframe>
      <el-button icon="el-icon-arrow-right" circle @click="move(1)"></el-button>
    </div>
    <el-select v-model="selectedIndex" filterable placeholder="Select A Day">
      <el-option
        v-for="(op, index) in options"
        :key="op.id"
        :label="'Day ' + op.id"
        :value="index"
      />
    </el-select>
    <div v-if="selectedItem.author" class="day-info">
      <b>{{selectedItem.author}}</b>
      <i> - {{selectedItem.date}}</i>
    </div>
  </section>
</template>

<script>
import config from '../config.json';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      options: config || [],
      // private property, do not edit!!
      i: 0
    };
  },
  computed: {
    selectedIndex: {
      get: function () {
        return this.i;
      },
      set: function (val) {
        if (val < 0) {
          this.i = this.options.length - 1;
        } else if (val >= this.options.length) {
          this.i = 0;
        } else {
          this.i = val;
        }
      }
    },
    selectedItem() {
      return this.options[this.selectedIndex];
    },
    days() {
      return this.options.length;
    }
  },
  methods: {
    move(step) {
      this.selectedIndex += step;
    }
  },
  mounted() {
    this.selectedIndex = Math.floor(Math.random() * this.options.length);
  }
});
</script>

<style>
  body {
    min-height: 600px;
    min-width: 600px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>

<style lang="scss" scoped>
  $frame: 400px;
  $section: 600px;
  h1 {
    font-size: 40px;
    font-weight: lighter;
    letter-spacing: 2px;
    margin: 0;
  }
  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: $section;
    width: $section;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
  }
  iframe {
    width: $frame;
    height: $frame;
    border: none;
    outline: none;
  }
  .content {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  i {
    display: block;
    cursor: pointer;
  }

  .day-info {
    // line-height: 1.3;
    b, i {
      display: inline;
    }
  }
</style>
