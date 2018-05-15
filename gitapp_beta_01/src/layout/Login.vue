<template>
  <section>
    <form-box 
      title="Sign in" 
      v-on:save="onLogin" 
      @clear="onClear">
        <img src="/static/logo.png" alt="GitHub" class="logo">
    </form-box>
  </section>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import FormBox from '@/components/FormBox.vue'

Vue.use(Buefy)

export default {
  name: 'Login',
  components: {
    FormBox
  },
  data () {
    return {

    }
  },
  methods: {
    onLogin: function () {

    },
    onClear: function () {
      alert('clear')
    }    
  }  
}
</script>

<style>
  html {
    background: rgba(135, 193, 166, 0.23);
  }
  .logo{
    padding-right: 10px;
    padding-bottom: 10%;
    padding-top: 0;    
  }
  .button.is-primary {
    background-color: #7cbae6;
    width: 100%; 
  }
  .button.button.is-secondary{
    width: 100%;
    margin-top: 5%;    
  }
  .button.is-primary:hover {
    background-color: #608fb1;
  }
  .media-content {
    padding-bottom: 3%;
  }  
</style>
