<template>
  <section>
    <list-box 
      title="List Box">                                                                        
    </list-box>
  </section>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import ListBox from '@/components/ListBox.vue'

Vue.use(Buefy)

export default {
  name: 'Dashboard',
  components: {
    ListBox
  },
  // beforeRouteEnter (to, from, next) {

  // },  
  created() {
    
  },
  data () {
    return {}
  },
  methods: {}  
}
</script>

<style>
  html {
    background: rgba(135, 193, 166, 0.23);
  }
</style>
