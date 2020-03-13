<template>
  <main id="politicians">
    <template v-if="politicians.length === 0">
      <p>Loading politicians...This will take 1-2 seconds.</p>
      <LoadingSpinner />
    </template>
    <el-input
      clearable
      placeholder="Search for a politician"
      v-model="search"
      class="search"
    />

    <el-row class="politicians-row">
      <el-col
        :xs="24"
        :sm="12"
        :lg="8"
        v-for="o in filteredPoliticians"
        :key="o.id"
      >
        <router-link :to="/politician/ + o.id">
          <el-card
            shadow="hover"
            :style="{
              position: 'relative'
            }"
          >
            <div class="card-body">
              <div
                class="thumbnail"
                :style="{
                  background:
                    'url(' + o.profile_image + ') no-repeat center center',
                  'background-size': 'cover'
                }"
              ></div>
              <div class="text">
                <p>
                  <b>{{ o.name }}</b>
                </p>
                <p>{{ o.primary_position }}</p>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>

    <p v-if="filteredPoliticians.length === 0">
      Sorry, no politicians match your search.
    </p>
  </main>
</template>

<script>
import { getPoliticians } from "@/api";
import { loadCache, updateCache } from "@/utils";
import LoadingSpinner from "@/components//LoadingSpinner";

export default {
  name: "Politicians",
  data() {
    return {
      politicians: [],
      search: ""
    };
  },
  components: { LoadingSpinner },
  computed: {
    filteredPoliticians() {
      return this.politicians.filter(politician => {
        return politician.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  },
  async created() {
    try {
      this.politicians = await loadCache(this, "politicians", getPoliticians());
    } catch (e) {
      console.log(e);
    }
  },
  async mounted() {
    try {
      this.politicians = await updateCache(
        this,
        "politicians",
        getPoliticians()
      );
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  text-align: center;
}

a {
  text-decoration: none;
}

.bottom {
  margin-top: 12px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.el-card {
  height: 120px;
  margin: 5px;
}

.card-body {
  /* padding: 0px; */
  /* position: absolute; */
  /* left: 0; */
  /* top: 110px; */
  /* width: 100%;
  height: 100%; */
  /* display: flex;
  align-items: center;
  flex-direction: row; */
}

.card-body > div {
  display: inline-block;
}

.card-body .thumbnail {
  width: 15vh;
  height: 15vh;
  /* display: block; */
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}

.card-body .text {
  font-size: 0.9rem;
  width: 60%;
  vertical-align: top;
}

.card-body p {
  margin: 0;
}

/* .image {
  width: 100%;
  display: block;
} */

.search {
  width: 320px;
  max-width: 90vw;
  margin: 10px;
}

.politicians-row {
  width: 90vw;
  margin: 0 auto;
}

/* @media only screen and (max-width: 600px) {
  .image {
    height: 150px;
  }
  .el-card {
    height: 280px;
    min-width: unset;
  }
} */
</style>
