<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg:
        "Tech has the potential to make our democracies better. It's time we realise that.",
      description:
        "OpenPromises is civilian-led not for profit project that is based on recording promises made by politicians. Our source is publicly available media sources and we are currently focusing on Malaysia due to it being the homebase of our current participants, and also due to the upcoming general elections. We believe that technology can have a great impact on governance and democracy. Tech can change the world, and we aim to be a part of that."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
