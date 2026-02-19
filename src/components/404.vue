<template>
  <main class="not-found page-shell">
    <section class="page-panel not-found-card">
      <span class="label-chip">404</span>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <router-link to="/">
        <el-button type="primary">Go Back Home</el-button>
      </router-link>
    </section>
  </main>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
.not-found-card {
  max-width: 620px;
  margin: 40px auto 0;
  min-height: 260px;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
}

.not-found-card h1 {
  margin: 0.6rem 0 0.5rem;
}

.not-found-card p {
  margin: 0 0 1rem;
}

.not-found-card :deep(.el-button) {
  border-radius: 999px;
  min-width: 150px;
  height: 40px;
  font-weight: 700;
}
</style>
