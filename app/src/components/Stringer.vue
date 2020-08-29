<template>
    <svg width="240" height="700">        
        <defs>
            <linearGradient xmlns="http://www.w3.org/2000/svg" id="stringer-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop class="stop1" offset="0%" style="stop-color:#000; stop-opacity:.25"/>
                <stop class="stop2" offset="50%" style="stop-color:#fff; stop-opacity:0"/>
                <stop class="stop3" offset="100%" style="stop-color:#000; stop-opacity:.25"/>
            </linearGradient>
        </defs>
        <rect x="calc(50% - 1px)" y="0" width="2" height="700" fill="#fc0" opacity="1" stroke="#000" stroke-width=".1px"/>
        <rect x="calc(50% - 1px)" y="0" width="2" height="700" fill="url('#stringer-gradient')" opacity="1"/>        
    </svg>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'Stringer',  
  computed: mapState(["test"]),
  props: {
      models: String
  }
}

</script>

<style>
</style>