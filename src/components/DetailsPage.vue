<template>
  
<!--$router.params url에 파라미터를 다 가져옴 -->
   <div class="detail-view container mt-4">
    <h4>상세페이지</h4>
    <h2>{{ 블로그글[$route.params.id].title }}</h2>
    <p>{{ 블로그글[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  props : {
    블로그글 : Array,
  }
}
</script>

<style>
.detail-view {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>