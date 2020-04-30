<template>
  <div>
    <b-jumbotron
      header="Chat App with Vue"
      lead="Powered by Stream Chat SDK and Bootstrap Vue"
      bg-variant="info"
      text-variant="white"
    >
      <p>for more information visit website</p>
      <b-btn target="_blank" href="https://getstream.io/chat/">more info</b-btn>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <LoginForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import LoginForm from "@/components/LoginForm.vue";

export default Vue.extend({
  name: "login",
  components: { LoginForm }
});
</script>
