<template>
  <main id="politicians" :class="{ embedded }">
    <template v-if="politicians.length === 0">
      <div class="loading-state">
        <p>Loading politicians...</p>
        <LoadingSpinner />
      </div>
    </template>
    <template v-else>
      <cabinet
        v-if="showCabinet && filteredPoliticians.length !== 0"
        :politicians="politicians"
      />

      <header class="politicians-head">
        <h2>{{ embedded ? "Browse Politicians" : "All Politicians" }}</h2>
        <p>
          All representatives currently available in the OpenPromises database.
          If something is missing, please let us know.
        </p>
      </header>

      <div class="controls">
        <el-input
          clearable
          placeholder="Search for a politician"
          v-model="search"
          class="search"
        />
        <span class="result-count">{{ filteredPoliticians.length }} matches</span>
      </div>

      <el-row class="politicians-row" :gutter="12">
        <el-col
          :xs="24"
          :sm="12"
          :lg="8"
          v-for="o in visiblePoliticians"
          :key="o.id"
        >
          <router-link :to="/politician/ + o.id">
            <politician-card :o="o" />
          </router-link>
        </el-col>
      </el-row>

      <p v-if="filteredPoliticians.length === 0" class="empty-state">
        Sorry, no politicians match your search.
      </p>

      <div v-if="embedded && filteredPoliticians.length > visiblePoliticians.length" class="more-link">
        <router-link to="/politicians">
          <el-button plain type="primary">View Full Directory</el-button>
        </router-link>
      </div>
    </template>
  </main>
</template>

<script>
import { getPoliticians } from '@/api'
import { loadCache, updateCache } from '@/utils'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import PoliticianCard from '@/components/PoliticianCard.vue'
import Cabinet from '@/components/Cabinet.vue'

export default {
  name: 'Politicians',
  props: {
    embedded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      politicians: [],
      search: '',
    }
  },
  components: { Cabinet, LoadingSpinner, PoliticianCard },
  computed: {
    filteredPoliticians() {
      return this.politicians.filter((politician) => {
        return politician.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    visiblePoliticians() {
      if (!this.embedded) return this.filteredPoliticians
      return this.filteredPoliticians.slice(0, 18)
    },
    showCabinet() {
      return !this.embedded && import.meta.env.MODE === 'development'
    }
  },
  async created() {
    try {
      // perhaps this caching logic should be in the store instead
      // here we ask the store for the info
      // it is the store's responsibility to check the cache
      const res = await loadCache(this, 'politicians', getPoliticians())
      if (res === undefined) throw new Error('Politicians.vue: Error in getting politicians')
      this.politicians = res
    } catch (e) {
      console.log(e)
    }
  },
  async mounted() {
    try {
      this.politicians = await updateCache(
        this,
        'politicians',
        getPoliticians()
      )
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
#politicians {
  text-align: center;
  padding: 4px 0 2px;
}

a {
  text-decoration: none;
  color: unset;
}

.politicians-head {
  margin: 8px auto 14px;
  max-width: 740px;
}

.politicians-head h2 {
  margin: 0;
  font-size: clamp(1.45rem, 2vw, 2rem);
}

.politicians-head p {
  margin: 0.55rem 0 0;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 8px 0 10px;
}

.search {
  width: min(420px, 92vw);
}

.result-count {
  border-radius: 999px;
  border: 1px solid rgba(15, 102, 94, 0.22);
  background: rgba(15, 118, 110, 0.08);
  color: #115550;
  font-weight: 700;
  font-size: 0.84rem;
  padding: 7px 10px;
}

.search :deep(.el-input__wrapper) {
  border-radius: 999px;
}

.politicians-row {
  margin: 0 auto;
}

.loading-state {
  padding: 18px 0 26px;
}

.empty-state {
  margin-top: 14px;
  color: #7b2738;
  font-weight: 700;
}

.more-link {
  margin-top: 18px;
}

.more-link :deep(.el-button) {
  border-radius: 999px;
  height: 40px;
  font-weight: 700;
}

.embedded .politicians-head h2 {
  font-size: clamp(1.35rem, 1.9vw, 1.72rem);
}

@media (max-width: 768px) {
  #politicians {
    padding-top: 0;
  }

  .controls {
    flex-direction: column;
  }

  .search {
    width: min(420px, 95vw);
  }
}

@media (max-width: 420px) {
  .search {
    width: 100%;
  }

  .result-count {
    width: 100%;
    max-width: 90vw;
    text-align: center;
  }
}
</style>
