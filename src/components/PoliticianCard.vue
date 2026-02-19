<template>
  <el-card
    class="politician-card"
    shadow="hover"
    :body-style="{ padding: '0px', height: '100%' }"
  >
    <div class="card-body">
      <img
        class="thumbnail"
        :src="imageToShow"
        :alt="o.name"
        @error="imageLoadError"
      />
      <div class="text">
        <h3>{{ o.name }}</h3>
        <p>{{ o.primary_position || "Representative" }}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
import iconPath from './user-icon.png';

export default {
  name: "PoliticianCard",
  data: () => ({
    imageError: false,
    iconPath,
  }),
  props: {
    o: { type: Object }
  },
  computed: {
    imageToShow: function() {
      if (this.o.profile_image && !this.imageError) {
        return this.o.profile_image;
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
};
</script>

<style scoped>
.politician-card {
  height: 100%;
  min-height: 132px;
  margin: 6px 4px;
  border-radius: 16px;
  border: 1px solid rgba(31, 77, 78, 0.14);
  box-shadow: 0 12px 26px rgba(15, 36, 45, 0.1);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.politician-card:hover {
  transform: translateY(-2px);
  border-color: rgba(15, 118, 110, 0.28);
  box-shadow: 0 16px 30px rgba(15, 36, 45, 0.15);
}

.card-body {
  display: flex;
  gap: 14px;
  align-items: center;
  height: 100%;
  padding: 12px;
}

.thumbnail {
  width: 84px;
  min-width: 84px;
  height: 84px;
  border-radius: 12px;
  border: 1px solid rgba(15, 118, 110, 0.22);
  object-fit: cover;
  background: #e8f0f2;
}

.text {
  font-size: 0.9rem;
  text-align: left;
  min-width: 0;
}

.text h3 {
  margin: 0;
  color: #0d2e43;
  line-height: 1.25;
  font-size: 1rem;
}

.text p {
  margin: 0.35rem 0 0;
  color: #4a5f6c;
  font-size: 0.87rem;
}

.shadow-img {
  display: none;
}

@media (max-width: 768px) {
  .politician-card {
    margin: 6px 0;
  }

  .thumbnail {
    width: 74px;
    min-width: 74px;
    height: 74px;
  }

  .text h3 {
    font-size: 0.96rem;
  }

  .text p {
    font-size: 0.84rem;
  }
}

.text h3,
.text p {
  margin: 0;
}
</style>
