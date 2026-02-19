<template>
  <el-card header="Contact Details" class="contact-card">
    <div class="field">
      <p><b>Email</b></p>
      <p>{{ email || '-' }}</p>
    </div>
    <div class="field">
      <p><b>Phone Number</b></p>
      <p>{{ phone_number || '-' }}</p>
    </div>
    <div class="field">
      <p><b>Facebook</b></p>
      <p><a :href="facebook_url" target="_blank" rel="noopener noreferrer">{{ facebook_url || '-' }}</a></p>
    </div>
    <div class="field">
      <p><b>Twitter</b></p>
      <p><a :href="twitter_url" target="_blank" rel="noopener noreferrer">{{ twitter_url || '-' }}</a></p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    email: {
      type: String
    },
    facebook_url: {
      type: String
    },
    phone_number: {
      type: String
    },
    twitter_url: {
      type: String
    }
  }
}
</script>

<style scoped>
.contact-card {
  border-radius: 14px;
  border: 1px solid rgba(21, 67, 72, 0.16);
}

.field {
  margin-bottom: 10px;
}

.field:last-child {
  margin-bottom: 0;
}

.field p {
  margin: 0.2rem 0;
}

.field a {
  word-break: break-word;
}
</style>
