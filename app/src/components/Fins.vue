<template>        
    <svg width="240" height="700">
        <!--   
        <text x="110" y="600">{{brand}}</text>        
        <rect x="65" y="550" width="10" height="50" rx="5" ry="5" fill="red" />
        <rect x="115" y="625" width="10" height="50" rx="5" ry="5" fill="red" />
        <rect x="165" y="550" width="10" height="50" rx="5" ry="5" fill="red" />
        -->
        <FCSII />    
    </svg>        
</template>

<script>

    import { mapState } from "vuex";
    const FCSII = () => import ('./fins/FCSII');

    export default {
    name: 'Fins',  
    computed: mapState(["test"]),
    components: {
        FCSII
    },
    props: {
        brand: String
    }
    }

</script>

<style>
</style>
