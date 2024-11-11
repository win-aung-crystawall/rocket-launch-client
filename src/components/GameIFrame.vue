<template>
  <div class="iframe-container">
    <iframe
      :src="websiteUrl"
      width="100%"
      height="600px"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websiteUrl: "http://127.0.0.1:8000/game/index.html" // Replace with the desired URL
    };
  }
};
</script>

<style scoped>

</style>
