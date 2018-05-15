<template>
  <section class="list-box">
      <b-message :title="title" :closable="false">
      </b-message>      
  </section>
</template>

<script>

export default {
  name: 'ListBox',
  props: ['title'],
  data () {
    return {}
  },
}
</script>

<style>

</style>
