<template>
  <main id="politicians">
    <template v-if="politicians.length === 0">
      <p>Loading politicians...This will take 1-2 seconds.</p>
      <LoadingSpinner />
    </template>
    <cabinet
      v-if="
        showCabinet &&
        politicians.length > 0 &&
        filteredPoliticians.length !== 0
      "
      :politicians="politicians"
    />
    <h2>All Politicians</h2>
    <p>
      All politicians in the OpenPromises database. If you see any missing,
      please get in touch with us.
    </p>
    <el-input
      clearable
      placeholder="Search for a politician"
      v-model="search"
      class="search"
    />
    <el-row class="politicians-row">
      <el-col
        :xs="24"
        :sm="8"
        :lg="6"
        v-for="o in filteredPoliticians"
        :key="o.id"
      >
        <router-link :to="/politician/ + o.id">
          <politician-card :o="o" />
        </router-link>
      </el-col>
    </el-row>

    <p v-if="filteredPoliticians.length === 0">
      Sorry, no politicians match your search.
    </p>
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
    showCabinet() {
      return process.env.NODE_ENV === 'development'
    },
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
main {
  text-align: center;
}

a {
  text-decoration: none;
  color: unset;
}

.bottom {
  margin-top: 12px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.search {
  width: 320px;
  max-width: 90vw;
  margin: 10px;
}

.politicians-row {
  margin: 0 auto;
}
</style>
