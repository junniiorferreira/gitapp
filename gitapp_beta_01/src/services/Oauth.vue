<script>
    export default {
    name: 'Oauth',
    beforeRouteEnter (to, from, next) {
        if (to.query.code) {
            if(localStorage.getItem('code')){
                localStorage.removeItem('code')
                // localStorage.setItem('code', to.query.code)
                console.log('token antigo. "code" será Atualizado -> ',to.query.code) 
            }
            localStorage.setItem('code', to.query.code)
            console.log('Novo token code Solicitado. Seu novo token -> ',to.query.code) 
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
