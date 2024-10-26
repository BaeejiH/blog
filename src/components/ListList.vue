<template>
  <div>
    <h4>{{블로그글.title}}</h4>
    <p>{{블로그글.content}}</p>
    <p>{{블로그글.date}}</p>
  </div>
</template>

<script>
export default {
  props:{
    블로그글 : Array,
  }
}
</script>

<style>

</style>