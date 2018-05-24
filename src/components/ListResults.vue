<template>
    <div class="list-result">
        <div class="loader-box">
            <!-- <h4 class="header-list-title">Todos os repositórios desenvolvidos em JAVA</h4> -->
            <v-card>
                <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
                >
                    <v-layout row wrap class="dash-list" v-bind:key="source.id" v-for="source in sources">
                        <v-flex xs12 class="card-box"  @click.stop="rightDrawer = !rightDrawer; getRequests(source.owner.login,source.name)">
                            <h3 class="v-card-title">{{source.owner.login}}</h3>
                            <v-card-media
                            v-bind:src="source.owner.avatar_url"
                            height="200px"
                            cover
                            >
                            </v-card-media>                        
                            <v-card color="blue-grey darken-2" class="white--text card-info">
                                <v-card-title primary-title>
                                    <div class="headline"><h4>{{appendTitle(source.name)}}</h4></div>
                                </v-card-title>
                                <v-card-title primary-title class="primary-col">
                                    <div><p>{{appendSubstring(source.description)}}</p></div>
                                </v-card-title>                            
                                <v-card-actions>
                                    <v-btn flat dark color="blue-grey lighten-2"><v-icon left dark>star</v-icon>{{source.stargazers_count}}</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn flat dark color="blue-grey lighten-2"><v-icon left dark>share</v-icon>{{source.forks_count}}</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>           
                </v-container>
            </v-card>          
            <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
                app
                class="aside-open"
                width=500
            >
                <v-list two-line subheader>
                <v-subheader inset>
                    <!-- <button id="close-box"><v-icon medium color="grey lighten-4">clear</v-icon></button> -->
                    Pull Requests
                </v-subheader>
                <v-progress-circular indeterminate color="primary" class="loading"></v-progress-circular>
                <div class="request-box">
                    <v-list-tile v-for="request in requests" :key="request.id" avatar class="hr-bottom" v-bind:href="request.html_url"  target="_blank">
                        <v-list-tile-avatar>
                            <img :src="request.user.avatar_url">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{request.title}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{request.body}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-subheader>{{dateString(request.created_at)}}</v-subheader>                    
                    </v-list-tile>                
                </div>
                </v-list>
            </v-navigation-drawer> 
        </div>                      
    </div>
</template>

<script>
export default {
    name: 'list-results',
    data () {
        return{
            sources: [],
            source: '',
            requests: [],
            request: '',
            right: true,
            rightDrawer: false,                        
        }
    },
    methods: {
        getRequests: function (owner,repo,desc){
            document.querySelector('.request-box').style.display = 'none'
            document.querySelector('.loading').style.display = 'inline-block';
            this.$http.get('https://api.github.com/repos/'+owner+'/'+repo+'/pulls')
            .then(response => {
                this.requests = response.body 
                console.log(response.body)
            })
            .then(function(){
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.request-box').style.display = 'block'
            })
        },
        dateString: function(date){
            var date_t = date.split('T'),
                exit_date = date_t[0].split('-')
            return ''+exit_date['2']+'/'+exit_date['1']+''
        },
        appendSubstring: function(substrin){
            if (substrin.length < 60) {
                return substrin
            }else{
                return substrin.substring(0,60)+' ...'
            }
        },
        appendTitle: function(title){
            if (title.length < 15) {
                return title
            }else{
                return title.substring(0,15)+' ...'
            }
        }        
    },
    created: function() {
        this.$http.get('https://api.github.com/search/repositories?q=language:java')
        .then(response => {
            this.sources = response.body.items
            console.log(response.body.items)
        })
        .then(function(){
            document.querySelector('.dash-loading').style.display = 'none'
            document.querySelector('.loader-box').style.display = 'block'
        })
    }
}
</script>

<style scoped>
    body{
        background: #fafafa
    }
    .container.fluid.grid-list-lg {
        text-align: center;
        padding: 0
    }
    .layout.dash-list.row.wrap{
        margin: 0;
        display: inline-block;        
    }
    .owner-title{text-align:center}
    .list-col{display: inline-block;text-align:center}
    .list-col .avatar{margin-left: auto;margin-right: auto}
    .subheader--inset {
        margin-left: 0;
        background: #307bf5;
        color: #fff!important;
        padding-left: 15px;
    }
    .subheader--inset #close-box{
        padding-right: 5px;
        margin-right: 5px;
        height: 100%;
        outline: none
    }
    .hr-bottom{
        border-bottom: 1px solid #ccc!important
    }
    .header-list-title {
        text-align: center;
        padding: 30px;
        padding-top: 0;
    }
    .card__media {
        background: #fff;
        border-radius: 0;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
        margin-top: 0px;              
    }
    .card-box{
        cursor: pointer;
        max-width: 300px;
        min-width: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        margin-bottom: 30px;        
    }
    .card-info{
        min-height: 200px;
        max-height: 200px;
        min-width: 280px;        
    } 
    .card{
        display: table;         
    }
    .source-selection {
        display: table;
    }
    .toolbar__title {
        width: 100%;
        text-align: center;
    }
    .card__title--primary.primary-col {
        padding-top: 17px;
        min-height: 80px;
        max-height: 80px;
        text-align: left!important;
        display: inline-table;
        box-sizing: content-box;
        float: left;
        width: 90%;
    }
    h3.v-card-title {
        color: #fff;
        background: #455a64;
        height: 31px;
        line-height: 30px;
        width: 100%;
    }    
    .card__title--primary {
        padding-top: 15px;
        padding-bottom: 0;
    }
    .loading{
        width: 100%!important;
        margin-top: 40px;
        text-align: center
    }
    .loader-box{
        display: none
    }
    @media only screen and (min-width: 1367px) {
        .layout.dash-list.row.wrap{
            width: 25%;
            transform: translateX(-2%);
        }
    }    
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
        .layout.dash-list.row.wrap{
            width: 33%
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .layout.dash-list.row.wrap{
            width: 50%
        }
    }    
</style>

