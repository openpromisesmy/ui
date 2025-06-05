<template>
    <el-card id="PoliticianDetails" header="Biography">
    <el-row>
        <el-col :sm="24">
            <img class="image" :src="imageToShow" @error="imageLoadError">
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
  data: () => ({
    imageError: false,
    iconPath: require("./user-icon.png")
  }),
  props: {
    politician: {
      type: Object
    }
  },
  computed: {
    imageToShow: function() {
      if (this.politician.profile_image && !this.imageError) {
        return this.politician.profile_image;
      } else {
        return this.iconPath;
      }
    }
  },
  methods: {
    imageLoadError() {
      this.imageError = true;
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
