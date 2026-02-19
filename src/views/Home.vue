<template>
  <main class="home">
    <section id="hero" class="surface-panel">
      <hero />
    </section>

    <section id="directory" class="surface-panel">
      <header class="directory-head">
        <h2>Representative Directory</h2>
        <p>
          Search profiles and review mandates, cabinet assignments, and tracked promises.
        </p>
      </header>
      <Politicians :embedded="true" />
    </section>
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Politicians from '@/views/Politicians.vue'

export default {
  name: 'Home',
  components: { Hero, Politicians }
}
</script>

<style scoped>
.home {
  display: grid;
  gap: 26px;
}

.surface-panel {
  border: 1px solid rgba(26, 59, 61, 0.12);
  background: rgba(255, 255, 255, 0.72);
  border-radius: 24px;
  box-shadow: 0 18px 34px rgba(20, 50, 55, 0.09);
  padding: clamp(18px, 2vw, 30px);
}

.directory-head {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 8px;
}

.directory-head h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2.2vw, 2.15rem);
}

.directory-head p {
  margin: 0.6rem 0 0;
}

@media (max-width: 768px) {
  .surface-panel {
    border-radius: 16px;
    padding: 14px;
  }
}
</style>
