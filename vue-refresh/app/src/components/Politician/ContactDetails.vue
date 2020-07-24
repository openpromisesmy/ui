<template>
  <el-card header="Contact Details">
    <p><b>Email</b></p>
    <p> {{ email || '-' }} </p>
    <p><b>Phone Number</b></p>
    <p> {{ phone_number || '-' }} </p>
    <p><b>Facebook</b></p>
    <p> <a :href="facebook_url"> {{ facebook_url || '-' }} </a> </p>
    <p><b>Twitter</b></p>
    <p><a :href="twitter_url"> {{ twitter_url || '-' }} </a> </p>
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
