<script>
export default {
  name: 'Oauth',
  beforeRouteEnter (to, from, next) {
      if (to.query.code) {
          if(localStorage.getItem('code')){
             localStorage.removeItem('code')
             localStorage.setItem('code', to.query.code)
             console.log('token code Atualizado -> ',to.query.code) 
          }else{
             localStorage.setItem('code', to.query.code)
             console.log('Novo token code Solicitado -> ',to.query.code) 
          }
          next({'name':'Dashboard'})
      }else{
          next({'name':'Login'})
      }
  },
  components: {},    
  data () {
    return {}
  },
}
</script>
