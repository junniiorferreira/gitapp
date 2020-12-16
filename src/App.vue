<template>
  <v-app>
    <v-toolbar
      app>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <div class="full-loading">
        <v-progress-circular indeterminate color="primary" class="dash-loading"></v-progress-circular>
      </div>
      <router-view/>
    </v-content>
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WeCart'
    }
  },
  name: 'App'
}
</script>

<style lang="css" scoped>
  .center-toolbar {
    width: 100%!important;
  }
  .full-loading {
    display: table;
    width: 35px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .dash-loading {
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
    display: table-cell;
  }    
</style>
