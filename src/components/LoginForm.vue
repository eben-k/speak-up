<template>
  <div class="login-form">
    <h5 class="text-center">Chat Login</h5>
    <hr />
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="userInputGroup" label="User Name" label-for="userInput">
        <b-alert>{{ error }}</b-alert>
        <b-form-input
          id="userInput"
          type="text"
          placeholder="Enter user name"
          v-model="userId"
          autocomplete="off"
          :disabled="loading"
          required
        ></b-form-input>
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        class="ld-ext-right"
        v-bind:class="{ running: loading }"
        :disabled="isValid"
      >
        Login
        <div class="ld ld-ring ld-spin"></div>
      </b-button>
    </b-form>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "login-form",
  data: () => ({ userId: "" }),
  computed: {
    isValid: function() {
      const result: boolean = this.userId.length < 3;
      return result ? result : this.loading;
    },
    ...mapState(["loading", "error"]),
    ...mapGetters(["hasError"])
  },
  methods: {
    ...mapActions({ login: "login" }),

    async onSubmit() {
      const result = await this.$store.dispatch("login", this.userId);
      console.log(result, "...........");
    }
  }
});
</script>
