<template>
<main id="quizzes">
  <component :is="componentToRender" />
</main>
</template>

<script>
import RealOrFake from '@/components/Quizzes/RealOrFake'

export default {
  name: 'Quizzes',
  data: () => ({
    componentMap: {'real-or-fake': RealOrFake}
  }),
  computed: {
    componentToRender: function () {
      return this.componentMap[this.$route.params.id]
    }
  }
}
</script>
