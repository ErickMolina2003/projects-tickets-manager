<template>
  <v-container class="login-container">
    <v-row v-if="login" class="d-flex flex-column" align-content="center">
      <v-col align-self="center" cols="1" md="1" lg="1">
        <v-icon class="pl-3" large>mdi-account</v-icon>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          v-model="username"
          label="Usuario"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          v-model="password"
          label="Contrasena"
          type="password"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <p class="create-account-paragraph" @click="goToRegister($event)">
          Crear Cuenta
        </p>
      </v-col>
      <v-btn rounded elevation="0" color="primary" @click="logIn"
        >Iniciar Sesion</v-btn
      >
    </v-row>

    <v-row v-if="register" class="d-flex flex-column" align-content="center">
      <v-col align-self="center" cols="1" md="1" lg="1">
        <v-icon class="pl-3" large>mdi-account-plus</v-icon>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          label="Usuario"
          v-model="newUsername"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          label="Nombre"
          v-model="firstName"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          label="Apellido"
          v-model="lastName"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          label="Contrasena"
          v-model="newPassword"
          type="password"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-btn rounded elevation="0" color="primary" @click="createAccount"
        >Registrarse</v-btn
      >
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { getUsers, createUser } from '@/services/UsersService';
import UserStore from '@/store/models/user';
import { getModule } from 'vuex-module-decorators';

@Component({
  name: 'LogIn',
})
class LogIn extends Vue {
  @Prop({ type: Boolean, default: true })
  login!: boolean;

  @Prop({ type: Boolean, default: false })
  register!: boolean;

  userStore = getModule(UserStore, this.$store);

  username = '';
  password = '';

  firstName = '';
  lastName = '';
  newUsername = '';
  newPassword = '';

  goToRegister() {
    this.$emit('goToRegister', true);
  }

  async logIn() {
    const users = await getUsers();

    users.forEach((user: any) => {
      if (user.first_name == this.username) {
        this.userStore.setUser(user);
        this.userStore.setUserId(user.id);
        this.$router.push('/projects');
      }
    });
  }

  async createAccount() {
    const newUser = {
      first_name: this.firstName,
      last_name: this.lastName,
      username: this.newUsername,
      password: this.newPassword,
    };

    const createdUser = await createUser(newUser);

    if (createdUser) {
      this.userStore.setUser(createdUser);
      this.userStore.setUserId(createdUser.id);

      this.$router.push('/projects');
    }
  }
}

export default LogIn;
</script>

<style scoped>
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.create-account-paragraph {
  color: gray;
  cursor: pointer;
}
</style>
