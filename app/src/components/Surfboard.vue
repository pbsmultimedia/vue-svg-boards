<template>
    <div :class="['surfboard', test.viewMode]">
        <Deck v-if="test.showDeck"/>
        <Rocker />
        <Bottom />
    </div>
</template>

<script>

import { mapState } from "vuex";
import Deck from './Deck';
import Bottom from './Bottom';
import Rocker from './Rocker';

export default {
  name: 'Surfboard',
  components: {
      Deck,
      Bottom,
      Rocker
  },  
  computed: mapState(["test"]),
  props: {
      models: String
  }
}

</script>

<style>
    .surfboard {
        width: 95vw;
        height: 90vh;
    }

    .surfboard.portrait {
        display: flex
    }

    /*
    .portrait {                
        width: 50%;
        height: 100%;
        float: left;
    }

    .landscape {         
        width: 100%;
        height: 50%;        
    }
    */
</style>