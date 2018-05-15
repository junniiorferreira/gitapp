<template>
  <section>
    <list-box 
      title="List Box">                                                                        
    </list-box>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import ListBox from '@/components/ListBox.vue'

Vue.use(Buefy)

export default {
  name: 'Dashboard',
  components: {
    ListBox
  },
  beforeRouteEnter (to, from, next) {
    console.log('iniciando dashboard axios')
    axios.get('https://github.com/login/oauth/authorize?client_id=a8f06935a25173198a91&client_secret=3141fc1b9c83912260073ede59d12fcd68ba49fc')
    .then(function(response) {
      console.log(response.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
    });
},  
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
