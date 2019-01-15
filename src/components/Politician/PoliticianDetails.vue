<template>
    <el-card id="PoliticianDetails">
    <el-row>
        <el-col :sm="24">
            <img class="image" :src="politician.profile_image">
        </el-col>
         <el-col :sm="24">
            <div class="details-text">
                <h1>
                    {{ politician.name }}
                </h1>
                <p><b>{{ politician.primary_position }}</b></p>
                <p>{{ politician.brief }}</p>
            </div>
         </el-col>
    </el-row>
    </el-card>
</template>

<script>
export default {
  name: 'Politician',
  props: {
    politician: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-card {
    text-align: left;
    height: 100%
}

.image {
  display: block;
  object-fit: cover; /* Do not scale the image */
  object-position: top; /* Center the image within the element */
  max-height: 250px;
  max-width: 280px;
  margin: 0 auto
}

.details-text {
    margin: 0 auto
}

</style>
