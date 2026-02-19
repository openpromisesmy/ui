<template>
  <main class="page-shell">
    <section class="page-panel contact-panel">
      <header class="view-header">
        <span class="label-chip">Contact</span>
        <h1 class="title">Reach OpenPromises</h1>
        <p>
          For deployment inquiries, data corrections, or collaboration requests,
          contact the team directly.
        </p>
      </header>
      <div class="actions">
        <a href="https://m.me/openpromises.malaysia" target="_blank" rel="noopener noreferrer">
          <el-button type="primary">Message on Facebook</el-button>
        </a>
        <a href="https://github.com/openpromisesmy" target="_blank" rel="noopener noreferrer">
          <el-button plain>View GitHub Repositories</el-button>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-panel {
  min-height: 340px;
  display: grid;
  align-content: center;
  justify-items: center;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.actions :deep(.el-button) {
  border-radius: 999px;
  min-width: 190px;
  height: 42px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .contact-panel {
    min-height: 280px;
  }
}
</style>
