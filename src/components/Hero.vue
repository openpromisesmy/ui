<template>
  <section class="hero-wrapper">
    <div class="hero-copy">
      <p class="eyebrow">Citizen Accountability Tracker</p>
      <h1 id="tagline">{{ tagline }}</h1>
      <p class="lead">
        Browse elected representatives, inspect what they promised, and keep a
        running public record of outcomes.
      </p>
      <div class="btn-containers">
        <router-link to="/politicians">
          <el-button type="danger">Explore Politicians</el-button>
        </router-link>
        <a target="_blank" href="https://github.com/openpromisesmy" rel="noopener noreferrer">
          <el-button plain>View Github Repositories</el-button>
        </a>
      </div>
      <div class="hero-meta">
        <div class="meta-item">
          <b>2017-2020</b>
          <span>Initial deployment in Malaysia</span>
        </div>
        <div class="meta-item">
          <b>Open Source</b>
          <span>Reusable codebase for other countries</span>
        </div>
      </div>
    </div>
    <div class="hero-art">
      <img id="logo" src="@/assets/logo.jpg" alt="OpenPromises logo">
      <div class="art-badge">
        <span>Watch promises</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    tagline: {
      type: String,
      default: 'Track Promises by Your Representatives'
    }
  }
}
</script>

<style scoped>
#logo {
  width: min(340px, 100%);
  display: block;
  margin: 0 auto;
  border-radius: 24px;
  border: 4px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 22px 40px rgba(19, 45, 65, 0.2);
}

#tagline {
  font-size: clamp(2rem, 3.8vw, 3rem);
  margin: 0;
  color: #0f2940;
  line-height: 1.15;
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 800;
  color: #0f5d58;
}

.lead {
  font-size: 1.06rem;
  margin: 1rem 0 0;
  max-width: 650px;
}

.hero-copy {
  text-align: left;
}

.hero-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  flex-wrap: wrap;
  padding: 18px 12px;
}

.hero-art {
  position: relative;
  flex: 0 1 360px;
}

.art-badge {
  position: absolute;
  right: -10px;
  bottom: -18px;
  border-radius: 999px;
  background: #0f5d58;
  color: #ffffff;
  padding: 10px 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.74rem;
}

.btn-containers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.btn-containers :deep(.el-button) {
  border-radius: 999px;
  height: 42px;
  padding: 0 18px;
  font-weight: 700;
}

.hero-meta {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, minmax(170px, 1fr));
  gap: 12px;
}

.meta-item {
  border-radius: 12px;
  border: 1px solid rgba(20, 64, 70, 0.14);
  background: rgba(255, 255, 255, 0.55);
  padding: 10px 12px;
}

.meta-item b {
  display: block;
  color: #0d4651;
  font-size: 0.98rem;
}

.meta-item span {
  display: block;
  margin-top: 2px;
  color: #36545a;
  font-size: 0.85rem;
}

@media (max-width: 860px) {
  .hero-wrapper {
    padding: 8px 0;
  }

  .hero-meta {
    grid-template-columns: 1fr;
  }

  .art-badge {
    right: 10px;
  }
}
</style>
