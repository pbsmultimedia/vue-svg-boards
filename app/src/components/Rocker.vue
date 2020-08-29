<template>
    <div class="rocker">
        <svg    
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"            
            :viewBox="test.viewBox"
            height="100%"
            width="100%"
        >
            <defs>
                <linearGradient xmlns="http://www.w3.org/2000/svg" id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop class="stop1" offset="0%" style="stop-color:#ccc; stop-opacity:1"/>
                    <stop class="stop2" offset="40%" style="stop-color:#fff; stop-opacity: 1"/>
                    <stop class="stop3" offset="100%" style="stop-color:#ccc; stop-opacity:1"/>
                </linearGradient>
            </defs>
            <g :transform="test.rotation">                                   
                <path d="M138.662 196.346C134.702 133.153 120.925 34.6494 99.0625 0L97 0.412493C112.262 71.3612 114.737 155.097 115.15 219.034V700H121.225C125.487 661.638 135.527 565.775 139.487 489.216C144.437 393.518 142.647 259.938 138.662 196.346Z" fill="url('#gradient')" filter="url(#dropShadow)" />
                <!--
                <line x1="75" y1="0" x2="75" y2="700" stroke-width="1px" stroke="#fff" opacity=".1" /> 
                -->
            </g>    
        </svg>
    </div>    
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'Rocker',  
  computed: mapState(["test"]),
  props: {
      models: String
  }
}

</script>

<style>
</style>