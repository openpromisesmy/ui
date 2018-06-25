<template>
  <main id="promise">
    <template v-if="Object.keys(promise) === 0">
      <p>Loading promise...</p>
    </template>
    <template v-else>
      <h1>{{ promise.title }}</h1>
      <!-- <img class="image" :src="politician.profile_image">
      <p><b>{{ politician.primary_position }}</b></p>
      <h2>Promises by {{ politician.name }} {{ Array.isArray(promises) ? `(${promises.length})` : '' }}</h2>
      <p>{{ politician.brief }}</p> -->
    </template>

  </main>
</template>

<script>
import { getPromise, getPoliticians } from '@/api'
import moment from 'moment'
import LoadingSpinner from '@/components/shared/LoadingSpinner'

export default {
  name: 'Promise',
  components: { LoadingSpinner },
  data () {
    return {
      appStatus: '',
      politicians: [],
      promises: {}
    }
  },
  methods: {
    // parsePolitician: (promises, politicians) => promises.map(promise =>
    //   ({
    //     ...promise,
    //     status: promise.status ? promise.status : 'Review Needed',
    //     source_date: moment(promise.source_date).format('D MMMM YYYY')
    //   })
    // )
  },
  async created () {
    try {
      this.politician = await getPolitician(this.$route.params.id)
      const promises = await getPoliticianPromises(this.$route.params.id)
      promises.forEach(promise => console.log(promise.status))
      this.promises = this.parsePromises(promises)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  min-width: 30%;
  display: inline-block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  height: 300px;
}

#politicians p b {
  display: inline-block
}

</style>
