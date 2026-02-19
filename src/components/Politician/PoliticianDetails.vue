<template>
    <el-card id="PoliticianDetails" header="Biography">
    <el-row>
        <el-col :sm="24">
            <img
              class="image"
              :src="imageToShow"
              :alt="politician.name"
              @error="imageLoadError"
            >
        </el-col>
         <el-col :sm="24">
            <div class="details-text">
                <h1>
                    {{ politician.name }}
                </h1>
                <p><b>{{ politician.primary_position }}</b></p>
                <p>{{ politician.brief || "No biography available yet." }}</p>
            </div>
         </el-col>
    </el-row>
    </el-card>
</template>

<script>
import iconPath from './user-icon.png';

export default {
  name: 'Politician',
  data: () => ({
    imageError: false,
    iconPath,
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
    height: 100%;
    border-radius: 14px;
    border: 1px solid rgba(21, 67, 72, 0.16);
}

.image {
  display: block;
  object-fit: cover;
  object-position: top;
  max-height: 250px;
  max-width: 280px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid rgba(16, 70, 77, 0.2);
}

.details-text {
    margin: 0 auto;
    padding-top: 8px;
}

.details-text h1 {
  margin: 0;
  font-size: 1.7rem;
}

.details-text p {
  margin: 0.4rem 0 0;
}

</style>
