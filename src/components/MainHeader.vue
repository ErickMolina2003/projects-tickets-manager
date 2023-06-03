<template>
  <v-app-bar elevation="0" class="main-header" color="light-blue darken-4" dark>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-row align="center" justify="end">
      <v-col class="px-0" cols="2" md="2" lg="2">
        <h4>{{ userName }}</h4>
      </v-col>
      <v-col class="px-0" cols="2" md="2" lg="2">
        <v-icon x-large dark>mdi-account</v-icon>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'MainHeader',
})
export default class MainHeader extends Vue {
  @Prop({ type: String, default: 'Mis Tareas' })
  title!: string;

  @Prop({ type: String, default: 'My username' })
  userName!: string;
}
</script>

<style scoped></style>
