<template>
  <div class="container">
      <div class="loader"></div>
  </div>
</template>

<script>
</script>

<style scoped>
.container {
  margin: auto;
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
}

.loader {
  border: 6px solid rgba(15, 118, 110, 0.12);
  border-radius: 50%;
  border-top: 6px solid #0f766e;
  width: 42px;
  height: 42px;
  -webkit-animation: spin 0.9s linear infinite;
  animation: spin 0.9s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
