<template>
  <div>
    Controls. {{test.title}}
    <!--
    <input type="text" v-model="test.title">
    -->
    <!-- data will come from an endpoint? and outlines? -->
    <select v-model="test.title">
        <option v-for="model in this.$root.models" :value="model.id" v-bind:key="model.id">
        {{ model.name }}
        </option>
    </select>
    <p>
        <button @click="rotate">rotate</button>
        <button @click="toggleDeck">
            {{ test.showDeck ? 'hide deck' : 'show deck' }}
        </button>
    </p>    
    <hr>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'Control',  
  computed: mapState(["test"]),
  props: {
      models: String
  },
  methods: {
      rotate() {
        if (this.test.viewMode == 'landscape') {                    
            this.test.viewBox = '0 0 240 700';
            this.test.viewBoxRocker = '0 0 100 700',
            this.test.rotation = 'translate(0, 0) rotate(0)';
            this.test.viewMode = 'portrait';
        } else {            
            this.test.viewBox = '0 0 700 240';
            this.test.viewBoxRocker = '0 0 700 100',
            this.test.rotation = 'translate(700, 0) rotate(90)';
            this.test.viewMode = 'landscape';
        }        
      },
      toggleDeck() {
            this.test.showDeck = !this.test.showDeck
        }
  }
}

</script>

<style>
</style>
