<template>
  <section>
    <!-- <div v-for="(item, index) in arrRepos"> -->
    <div>  
      <list-box 
        title="Nome do Repositório">                                                                        
      </list-box>       
    </div>
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
  profile: this,
  components: {
    ListBox
  },
  beforeRouteEnter(to,from,next){
    Vue.http.post('https://github.com/login/oauth/access_token', {client_id: 'a8f06935a25173198a91',client_secret: '3141fc1b9c83912260073ede59d12fcd68ba49fc', code: ''+localStorage.getItem('code')+''}, {headers: {'Accept': 'application/json'}}).then((response) => {
       //success
       localStorage.setItem('profile_token', 'access_token='+response.body.access_token+'&token_type='+response.body.token_type+'')
    }, (err) => {
      //error
      console.log('Sem conexão com a internet.')
    })
    next()
  },
  created() {
    Vue.http.get('https://api.github.com/user?'+localStorage.getItem('profile_token')+'', {headers: {'Accept': 'application/json'}}).then((response) => {
        //success
        localStorage.setItem('profile', JSON.stringify(response.body))
      }, (err) => {
    })    
    Vue.http.get('https://api.github.com/repositories?q=language:java', {headers: {'Accept': 'application/vnd.github.mercy-preview+json'}}).then((response) => {
       //success
       localStorage.setItem('repos', JSON.stringify(response.body))
       return JSON.stringify(response.body)
    }, (err) => {
      //error
      console.log(err)
    })       
  },
  data () {
    return {
      array: localStorage.getItem('profile'),
      arrRepos: localStorage.getItem('repos')
    }
  }
  // methods: {}
}
</script>

<style>
  html {
    background: rgba(135, 193, 166, 0.23);
  }
</style>
