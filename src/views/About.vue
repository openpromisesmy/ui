<template>
  <main class="page-shell about-page">
    <section class="page-panel">
      <header class="view-header">
        <span class="label-chip">Mission</span>
        <h1 class="title">About OpenPromises</h1>
      </header>
      <section id="hero">
        <Hero :tagline="msg" />
      </section>
    </section>
    <div class="about-points">
      <el-row :gutter="14">
        <el-col :xs="24" :md="12" v-for="item in aboutSections" :key="item.title">
          <el-card class="about-card">
            <h2>{{ item.title }}</h2>
            <p v-for="(paragraph, idx) in item.paragraphs" :key="idx">{{ paragraph }}</p>
            <ul v-if="item.bullets">
              <li v-for="(bullet, idx) in item.bullets" :key="idx">{{ bullet }}</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
export default {
  name: 'About',
  components: { Hero },
  data () {
    return {
      msg:
        "Tech has the potential to strengthen democratic accountability.",
      aboutSections: [
        {
          title: "The Problem",
          paragraphs: [
            "The feedback loop in representative democracy is weak. Campaign promises influence votes, but fulfillment is rarely tracked systematically."
          ]
        },
        {
          title: "The Solution",
          paragraphs: [
            "OpenPromises gives citizens a clear, structured record of what was promised, what was done, and what remains unresolved."
          ]
        },
        {
          title: "What We Track",
          paragraphs: [
            "Promises can be policy shifts, projects, or one-off actions by people in office."
          ]
        },
        {
          title: "End Goal",
          paragraphs: [
            "Increase accountability among representatives while deepening informed civic participation."
          ]
        },
        {
          title: "Objectives",
          paragraphs: [
            "Provide a practical resource for citizens, journalists, and civic groups.",
            "Raise political awareness through transparent progress tracking."
          ]
        },
        {
          title: "Funding",
          paragraphs: [
            "The project is citizen-funded and community-supported. Independent funding helps preserve editorial neutrality."
          ]
        },
        {
          title: "How Funds Are Used",
          paragraphs: [
            "Development, security, and better research workflows reduce manual tracking overhead and improve reliability."
          ],
          bullets: [
            "Full-text search capabilities",
            "Security and reliability tools"
          ]
        },
        {
          title: "Deployment in Other Countries",
          paragraphs: [
            "The platform is designed for reuse in other political contexts.",
            "If you want to run OpenPromises in your country, message the team on Facebook."
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-points {
  width: 100%;
}

#hero {
  margin: 8px 0 0;
}

.about-card {
  height: 100%;
  text-align: left;
}

.about-card h2 {
  margin: 0 0 0.55rem;
  font-size: 1.2rem;
}

.about-card p {
  margin: 0.45rem 0;
}

.about-card ul {
  margin: 0.4rem 0 0;
  padding-left: 1rem;
}

.about-card li {
  margin-bottom: 0.25rem;
  color: #39565e;
}

@media (max-width: 768px) {
  .about-page {
    gap: 14px;
  }
}
</style>
