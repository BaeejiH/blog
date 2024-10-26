<template>
   <div class="detail-view container mt-4">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '상세 페이지',
      content: '이곳은 블로그 포스트의 상세 내용을 보여주는 페이지입니다.'
    }
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