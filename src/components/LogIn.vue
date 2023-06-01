<template>
  <v-container class="login-container">
    <v-row v-if="login" class="d-flex flex-column" align-content="center">
      <v-col align-self="center" cols="1" md="1" lg="1">
        <v-icon class="pl-3" large>mdi-account</v-icon>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field label="Usuario" outlined rounded></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
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
      <v-btn rounded elevation="0" color="primary">Iniciar Sesion</v-btn>
    </v-row>

    <v-row v-if="register" class="d-flex flex-column" align-content="center">
      <v-col align-self="center" cols="1" md="1" lg="1">
        <v-icon class="pl-3" large>mdi-account-plus</v-icon>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field label="Usuario" outlined rounded></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field label="Nombre" outlined rounded></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field label="Apellido" outlined rounded></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          label="Contrasena"
          type="password"
          outlined
          rounded
        ></v-text-field>
      </v-col>
      <v-col class="py-0" cols="12" md="4" lg="4">
        <v-text-field
          label="Confirmar Contrasena"
          outlined
          type="password"
          rounded
        ></v-text-field>
      </v-col>
      <v-btn rounded elevation="0" color="primary">Registrarse</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'LogIn',
})
class LogIn extends Vue {
  @Prop({ type: Boolean, default: true })
  login!: boolean;

  @Prop({ type: Boolean, default: false })
  register!: boolean;

  goToRegister() {
    this.$emit('goToRegister', true);
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
