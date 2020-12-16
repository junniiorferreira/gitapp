<template>
    <div class="list-result">
        <div class="loader-box">
            <!-- <h4 class="header-list-title">Todos os repositórios desenvolvidos em JAVA</h4> -->
            <v-card class="category-card">
                <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
                >
                    <div class="row"><h2>Açougue</h2></div>
                    <!-- <v-layout row wrap class="dash-list" v-bind:key="source.id" v-for="source in sources"> -->
                    <v-layout row wrap class="dash-list" v-bind:key="demo.id" v-for="demo in demos">                        
                        <!-- <v-flex xs12 class="card-box"  @click.stop="rightDrawer = !rightDrawer; getRequests(demo.owner.login,demo.name)"> -->
                        <v-flex xs12 class="card-box" >                            
                            <v-card class="white--text card-info">
                                <v-card-media
                                v-bind:src="demo.avatar_url"
                                height="110px"
                                cover
                                >
                                </v-card-media>
                                <v-card-title primary-title>
                                    <!-- <div class="headline"><h4 class="item-title">{{appendTitle(source.name)}}</h4></div> -->
                                    <div class="headline"><h4 class="item-title">{{appendTitle(demo.item_name)}}</h4></div>
                                    <v-spacer></v-spacer>
                                    <span class="item-price">R$ 1.099,99</span>
                                </v-card-title>                     
                                <v-card-actions>
                                    <v-btn flat dark color="blue-grey lighten-2" class="item-add btn-delivery"><v-icon left dark></v-icon>Comprar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>           
                </v-container>
            </v-card>

            <v-card class="category-card">
                <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
                >
                    <div class="row"><h2>Bebidas</h2></div>
                    <!-- <v-layout row wrap class="dash-list" v-bind:key="source.id" v-for="source in sources"> -->
                    <v-layout row wrap class="dash-list" v-bind:key="demo.id" v-for="demo in demos">                        
                        <!-- <v-flex xs12 class="card-box"  @click.stop="rightDrawer = !rightDrawer; getRequests(demo.owner.login,demo.name)"> -->
                        <v-flex xs12 class="card-box" >                            
                            <v-card class="white--text card-info">
                                <v-card-media
                                v-bind:src="demo.avatar_url"
                                height="110px"
                                cover
                                >
                                </v-card-media>                                
                                <v-card-title primary-title>
                                    <!-- <div class="headline"><h4 class="item-title">{{appendTitle(source.name)}}</h4></div> -->
                                    <div class="headline"><h4 class="item-title">{{appendTitle(demo.item_name)}}</h4></div>
                                    <v-spacer></v-spacer>
                                    <span class="item-price">R$ 1.099,99</span>
                                </v-card-title>                     
                                <v-card-actions>
                                    <v-btn flat dark color="blue-grey lighten-2" class="item-add btn-delivery"><v-icon left dark></v-icon>Comprar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>           
                </v-container>
            </v-card>

            <v-card class="category-card">
                <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
                >
                    <div class="row"><h2>Biscoitos</h2></div>
                    <!-- <v-layout row wrap class="dash-list" v-bind:key="source.id" v-for="source in sources"> -->
                    <v-layout row wrap class="dash-list" v-bind:key="demo.id" v-for="demo in demos">                        
                        <!-- <v-flex xs12 class="card-box"  @click.stop="rightDrawer = !rightDrawer; getRequests(demo.owner.login,demo.name)"> -->
                        <v-flex xs12 class="card-box" >                            
                            <v-card class="white--text card-info">
                                <v-card-media
                                v-bind:src="demo.avatar_url"
                                height="110px"
                                cover
                                >
                                </v-card-media>                                
                                <v-card-title primary-title>
                                    <!-- <div class="headline"><h4 class="item-title">{{appendTitle(source.name)}}</h4></div> -->
                                    <div class="headline"><h4 class="item-title">{{appendTitle(demo.item_name)}}</h4></div>
                                    <v-spacer></v-spacer>
                                    <span class="item-price">R$ 1.099,99</span>
                                </v-card-title>                     
                                <v-card-actions>
                                    <v-btn flat dark color="blue-grey lighten-2" class="item-add btn-delivery"><v-icon left dark></v-icon>Comprar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>           
                </v-container>
            </v-card>

            <v-card class="category-card">
                <v-container
                    fluid
                    style="min-height: 0;"
                    grid-list-lg
                >
                    <div class="row"><h2>Doces</h2></div>
                    <!-- <v-layout row wrap class="dash-list" v-bind:key="source.id" v-for="source in sources"> -->
                    <v-layout row wrap class="dash-list" v-bind:key="demo.id" v-for="demo in demos">                        
                        <!-- <v-flex xs12 class="card-box"  @click.stop="rightDrawer = !rightDrawer; getRequests(demo.owner.login,demo.name)"> -->
                        <v-flex xs12 class="card-box" >                            
                            <v-card class="white--text card-info">
                                <v-card-media
                                v-bind:src="demo.avatar_url"
                                height="110px"
                                cover
                                >
                                </v-card-media>                                
                                <v-card-title primary-title>
                                    <!-- <div class="headline"><h4 class="item-title">{{appendTitle(source.name)}}</h4></div> -->
                                    <div class="headline"><h4 class="item-title">{{appendTitle(demo.item_name)}}</h4></div>
                                    <v-spacer></v-spacer>
                                    <span class="item-price">R$ 1.099,99</span>
                                </v-card-title>                     
                                <v-card-actions>
                                    <v-btn flat dark color="blue-grey lighten-2" class="item-add btn-delivery"><v-icon left dark></v-icon>Comprar</v-btn>
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
            demos: [
                {
                    'id': 0,
                    'cat_name': 'Promoções',
                    'item_name': 'Guaraná Antártica 350ml',
                    'avatar_url': 'https://emporiodacerveja.vtexassets.com/arquivos/ids/167393-232-232?width=232&height=232&aspect=true',
                    'delivery_price': 'R$ 1.099,90',
                    'shipping_price': 'R$ 999,90'
                },
                {
                    'id': 1,
                    'cat_name': 'Promoções',
                    'item_name': 'Guaraná Antártica 350ml',
                    'avatar_url': 'https://emporiodacerveja.vtexassets.com/arquivos/ids/167393-232-232?width=232&height=232&aspect=true',
                    'delivery_price': 'R$ 1.099,90',
                    'shipping_price': 'R$ 999,90'
                },
                {
                    'id': 2,
                    'cat_name': 'Promoções',
                    'item_name': 'Guaraná Antártica 350ml',
                    'avatar_url': 'https://emporiodacerveja.vtexassets.com/arquivos/ids/167393-232-232?width=232&height=232&aspect=true',
                    'delivery_price': 'R$ 1.099,90',
                    'shipping_price': 'R$ 999,90'
                },
                {
                    'id': 3,
                    'cat_name': 'Promoções',
                    'item_name': 'Guaraná Antártica 350ml',
                    'avatar_url': 'https://emporiodacerveja.vtexassets.com/arquivos/ids/167393-232-232?width=232&height=232&aspect=true',
                    'delivery_price': 'R$ 1.099,90',
                    'shipping_price': 'R$ 999,90'
                },
                {
                    'id': 4,
                    'cat_name': 'Promoções',
                    'item_name': 'Guaraná Antártica 350ml',
                    'avatar_url': 'https://emporiodacerveja.vtexassets.com/arquivos/ids/167393-232-232?width=232&height=232&aspect=true',
                    'delivery_price': 'R$ 1.099,90',
                    'shipping_price': 'R$ 999,90'
                },
                {
                    'id': 5,
                    'cat_name': 'Promoções',
                    'item_name': 'Guaraná Antártica 350ml',
                    'avatar_url': 'https://emporiodacerveja.vtexassets.com/arquivos/ids/167393-232-232?width=232&height=232&aspect=true',
                    'delivery_price': 'R$ 1.099,90',
                    'shipping_price': 'R$ 999,90'
                }                                                                                 
            ]                        
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
            if (substrin.length < 90) {
                return substrin
            }else{
                return substrin.substring(0,90)+' ...'
            }
        },
        appendTitle: function(title){
            if (title.length < 30) {
                return title
            }else{
                return title.substring(0,30)+' ...'
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
            document.querySelector('.full-loading').style.display = 'none'
            document.querySelector('.loader-box').style.display = 'block'
        })
    }
}
</script>

<style scoped>
    body{
        background: #fafafa
    }
    .item-price {
        color: #17a2b8;
        width: 100%;
        text-align: center;
        padding-top: 8px;
        font-weight: 300;
        font-size: 14px;
    }
    .category-card {
        margin-bottom: 20px;
        box-shadow: none!important;
    }
    .container.fluid.grid-list-lg {
        text-align: center;
        padding: 0
    }
    .layout.dash-list.row.wrap{
        margin: 0;
        display: inline-block;        
    }
    .category-card h2 {
        color: #17a2b8;
        text-transform: uppercase;
        font-weight: 200;
        font-size: 17px;
        text-align: left;
        padding: 7px 0 0 12px;
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
    .card__media .card__media__background {
        width: 65%;
    }    
    .card__media {
        background: #fff;
        border-radius: 0;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0px;
        margin-top: 0px;              
    }
    .card-box{
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 20px; 
        width: 190px;
    }
    .card-info{
        min-height: auto;
        max-height: initial;
        min-width: 100%;       
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
    .card__title--primary {
        padding: 10px;
    }
    .card__actions, .card__media__content {
        display: block;
        padding: 0;
    }    
    .loading{
        width: 100%!important;
        margin-top: 40px;
        text-align: center
    }
    .loader-box{
        display: none
    }
    .item-title {
        font-size: 14px;
        font-weight: 100;
        text-align: left;
        justify-content: left;
        line-height: 17px;
        color: #000;
    }
    .btn .icon--left {
        margin-right: 0px;
    }
    .card__actions .btn, .card__actions>* {
        margin: 0px 0px 3px 0px;
        font-size: 11px;
        line-height: 7px;
        width: 95%;
    }
    .btn--flat {
        background-color: red;
    }    
    .btn .icon--left {
        margin-right: 8px;
        font-size: 16px;
    }
    .btn__content {
        font-size: 11px;
        line-height: 5px;
    }
    .item-add {
        border-radius: 5px;
        color: #fff!important;                
    }
    .btn-delivery {
        background: #17a2b8!important;
    }
    .btn-wish {
        background: #34a853!important;
    }
    .card {
        border-radius: 5px;
        padding: 5px;
        box-shadow: 0 2px 1px -1px rgb(0 0 0 / 10%), 0 1px 1px 0 rgb(0 0 0 / 0.1), 0 1px 3px 0 rgba(0,0,0,.1);
    }    
    @media only screen and (min-width: 1367px) {
        .layout.dash-list.row.wrap{
            width: 16%;
            transform: translateX(-2%);
        }
    }    
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
        .layout.dash-list.row.wrap{
            width: auto
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .layout.dash-list.row.wrap{
            width: 24%
        }
    }    
</style>

