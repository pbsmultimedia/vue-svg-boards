<!-- this should be just bottom -->
<template>      
    <div :class="['bottom', test.viewMode]">
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
                <mask id="outline">
                    <path d="M211.378 369.507C211.336 225.62 186.396 84.729 120 0C53.604 84.729 28.664 225.619 28.621 369.507H28.57C28.529 517.689 62.729 699.064 120 700C177.271 699.064 211.474 517.689 211.43 369.507H211.378Z" fill="#fff"></path>
                </mask>
                <linearGradient xmlns="http://www.w3.org/2000/svg" id="gradient-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop class="stop1" offset="0%" style="stop-color:#ccc; stop-opacity:1"/>
                    <stop class="stop2" offset="40%" style="stop-color:#fff; stop-opacity: 1"/>
                    <stop class="stop3" offset="100%" style="stop-color:#ccc; stop-opacity:1"/>
                </linearGradient>

                <radialGradient id="concave">
                    <stop offset="0%" style="stop-color:#003; stop-opacity: .1" />
                    <stop offset="100%" style="stop-color:#fff; stop-opacity: 0" />
                </radialGradient>

                <radialGradient id="rail-gradient">
                    <stop offset="70%" style="stop-color:#fff; stop-opacity: .1" />
                    <stop offset="75%" style="stop-color:#003; stop-opacity: .2" />
                </radialGradient>

                <!-- spray - aspect ratio control on both image and pattern -->
                <pattern id="spray" height="100%" width="100%"
                patternContentUnits="objectBoundingBox" 
                viewBox="0 0 1 1" preserveAspectRatio="xMidYMid slice">
                    <image height="1" width="1"  preserveAspectRatio="xMidYMid slice" xlink:href="https://images.squarespace-cdn.com/content/v1/5b87236f55b02c3cf682e32b/1536693147389-HOJNZWU3NP9OITA0C075/ke17ZwdGBToddI8pDm48kOT4XFbjPh2wviguHcWSfHx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmS0k9nmfOWkBD2X4dgpGrpTPEppH71Jxj5Xy1txktWwN6z35OdSjbl9A5nuJM5etC/alana_G0092571.jpg?format=1000w" />
                </pattern>

                <filter id="shadow" x0="-50%" y0="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"></feGaussianBlur>
                    <feOffset dy="2" dx="3"></feOffset>
                    <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>
                    
                    <feFlood flood-color="#444444" flood-opacity="0.75"></feFlood>
                    <feComposite in2="shadowDiff" operator="in"></feComposite>
                    <feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite>
                    
                
                    <feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2"></feGaussianBlur>
                    <feOffset dy="-2" dx="-3"></feOffset>
                    <feComposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>
                    
                    <feFlood flood-color="#444444" flood-opacity="0.75"></feFlood>
                    <feComposite in2="shadowDiff" operator="in"></feComposite>
                    <feComposite in2="firstfilter" operator="over"></feComposite>
                </filter>

                <filter id="dropShadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                    <feOffset dx="0" dy="0" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="specular">
                    <feSpecularLighting result="specOut"
                        specularExponent="20" lighting-color="#bbbbbb">
                    <fePointLight x="50" y="75" z="200"/>
                    </feSpecularLighting>
                    <feComposite in="SourceGraphic" in2="specOut"
                        operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
                </filter>

            </defs>
                        
            <g transform="matrix(
                    1,
                    0,
                    0,
                    1,
                    0,
                    0
                )">
            <!--
            <g transform="matrix(
                    1.3,
                    0,
                    0,
                    .85,
                    -37,
                    45
                )">  
            -->                   
                <!-- 
                <g transform="matrix(
                    .75,
                    0,
                    0,
                    1,
                    30,
                    0
                )">
                -->
                <!--
                <path id="outline-bottom" fill="url(#spray)" stroke="#ccc" stroke-width="1" stroke-miterlimit="10" d="M211.378 369.507C211.336 225.62 186.396 84.729 120 0C53.604 84.729 28.664 225.619 28.621 369.507H28.57C28.529 517.689 62.729 699.064 120 700C177.271 699.064 211.474 517.689 211.43 369.507H211.378Z" opacity=".9" />
                -->         
                <!--       
                <g transform="matrix(
                    1.08,
                    0,
                    0,
                    1,
                    -9.5,
                    0
                )">
                    <path id="rail-bottom" fill="#ccc" d="M211.378 369.507C211.336 225.62 186.396 84.729 120 0C53.604 84.729 28.664 225.619 28.621 369.507H28.57C28.529 517.689 62.729 699.064 120 700C177.271 699.064 211.474 517.689 211.43 369.507H211.378Z" />
                </g>
                -->
                <g :transform="test.rotation">                    
                    <path id="outline-bottom" fill="url(#gradient-bottom)" filter="url(#dropShadow)" d="M211.378 369.507C211.336 225.62 186.396 84.729 120 0C53.604 84.729 28.664 225.619 28.621 369.507H28.57C28.529 517.689 62.729 699.064 120 700C177.271 699.064 211.474 517.689 211.43 369.507H211.378Z" />
                    <!--
                    <path id="spray" fill="url(#spray)" stroke="#ccc" stroke-width="1" stroke-miterlimit="10" d="M211.378 369.507C211.336 225.62 186.396 84.729 120 0C53.604 84.729 28.664 225.619 28.621 369.507H28.57C28.529 517.689 62.729 699.064 120 700C177.271 699.064 211.474 517.689 211.43 369.507H211.378Z" opacity=".95" />
                    -->
                    <!--
                    <rect id="rail" x="0" y="-10%" width="100%" height="120%" fill="url(#rail-gradient)" stroke="#ccc" />
                    -->
                    <g mask="url('#outline')">
                        <!-- for layer in layers..? -->
                        <!-- single concave
                        <rect x="45" y="350" width="150" height="300" fill="url(#concave)" />
                        /single concave -->
                        <!-- double concave -->
                        <rect x="25%" y="65%" width="25%" height="35%" fill="url(#concave)" />
                        <rect x="50%" y="65%" width="25%" height="35%" fill="url(#concave)" />
                        <!-- /double concave -->
                        <Stringer />
                        <Fins brand="fcs" />
                        <BrandLogo file="" />
                        <Lazy v-if="test.title == 2" />
                        <!-- 
                        <TailPatch />
                        <CarbonStripe />
                        <ModelLogo />                        
                        ...
                        -->
                    </g>
                </g>
            </g>    
        </svg>        
    </div>      
</template>

<script>

import Fins from './Fins';
import Stringer from './Stringer';
import BrandLogo from './BrandLogo';
// https://vuedose.tips/dynamic-imports-in-vue-js-for-better-performance/
const Lazy = () => import ('./Lazy');
import { mapState, mapMutations } from "vuex";

export default {
  name: 'Bottom',
  computed: mapState(["test"]),
  components: {
      Stringer,
      Fins,
      BrandLogo,
      Lazy      
  },
  methods: {
      ...mapMutations(["setTitle", "setOutline"])
  },      
  mounted() {
    this.setTitle("The traveller");
    //console.log(this.$root);
    //console.log(this.$store);
  }    
}

</script>

<style>
    
</style>
