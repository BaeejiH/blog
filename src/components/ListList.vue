<template>
  <div>
    <h4 @click="$router.push('/details/0')">{{블로그글[0].title}}</h4>
    <p>{{블로그글[0].content}}</p>
    <p>{{블로그글[0].date}}</p>

    <h4 @click="$router.push('/details/1')">{{블로그글[1].title}}</h4>
    <p>{{블로그글[1].content}}</p>
    <p>{{블로그글[1].date}}</p>

    <h4 @click="$router.push('/details/2')">{{블로그글[2].title}}</h4>
    <p>{{블로그글[2].content}}</p>
    <p>{{블로그글[2].date}}</p>
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