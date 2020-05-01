<template>
  <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">Chat App</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ username }} |</b-nav-text>
      <b-nav-item href="#" active>Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "ChatNvaBar",
  computed: {
    ...mapState(["user"])
  }
});
</script>
<style>
#chat-navbar {
  margin-bottom: "15px";
}
</style>
