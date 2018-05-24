<template>
  <v-app>
    <v-toolbar
      app>
      <v-spacer></v-spacer>
      <v-progress-circular indeterminate color="primary" class="dash-loading"></v-progress-circular>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
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
      title: 'GitApp'
    }
  },
  name: 'App'
}
</script>

<style>
  .center-toolbar {
    width: 100%!important;
  }
</style>
