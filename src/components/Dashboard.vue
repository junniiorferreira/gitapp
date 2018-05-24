<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
          <div class="container" id="dashboard">
            <ListResults v-on:sourceChanged="sourceChanged"></ListResults>
          </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ListResults from '@/components/ListResults'

export default {
    name: 'dashboard',
    components: {
        ListResults,
    },
    data () {
        return{
            source: ""
        }
    },
    methods: {
        sourceChanged: function(source){
            this.source = source
        }
    }
}
</script>