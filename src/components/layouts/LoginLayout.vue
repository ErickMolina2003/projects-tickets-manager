<template>
  <v-main style="height: 100%; py-0">
    <log-in
      :login="login"
      :register="register"
      @goToRegister="goToRegister($event)"
    ></log-in>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import LogIn from '@/components/LogIn.vue';

@Component({
  name: 'LoginLayout',
  components: {
    LogIn,
  },
})
class LoginLayout extends Vue {
  login = true;
  register = false;

  goToRegister() {
    this.login = false;
    this.register = true;
  }
}

export default LoginLayout;
</script>
