<template>
  <section class="form-box">
      <b-message :title="title" :closable="false">
        <slot></slot>
        <p>By Junniior Ferreira</p>
        <hr/> 
        <a href="https://github.com/login/oauth/authorize?client_id=a8f06935a25173198a91&client_secret=3141fc1b9c83912260073ede59d12fcd68ba49fc">
          <button class="button is-primary is-pulled-right" @click="$emit('save')" >Login with Github</button>        
        </a>       
      </b-message>
  </section>
</template>
<script>
export default {
  name: 'FormBox',
  props: ['title'],
  data () {
    return {
      info: null
    }
  },
  methods: {
    onClearClick: function () {
      this.warning()
    },
    warning: function() {
      this.$snackbar.open({
          message: 'Yellow button and positioned on top, click to close',
          type: 'is-warning',
          position: 'is-top',
          actionText: 'Retry',
          indefinite: true,
          onAction: () => {
            this.warning()    
          }
      })
    }    
  }  
}
</script>

<style>
    section.form-box {
        width: 320px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 10%;
        padding-top: 7%;
    }
    section.form-box p{
      text-align: center
    }
</style>
