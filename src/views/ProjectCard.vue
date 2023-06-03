<template>
  <v-card class="mx-0 my-12" max-width="374" elevation="2" rounded>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-illustration-project-management-the-concept-of-people-discussing-in-front-of-png-image_1055905.jpg"
    ></v-img>

    <v-card-title>Titulo</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="grey--text">
          <v-icon>mdi-account</v-icon> 50 Integrantes
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        <v-icon>mdi-percent</v-icon>
        Progreso 3/5 tareas terminadas
      </div>

      <div>descripcion del proyecto</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="success" block rounded @click="goToProject"> Ver </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'ProjectCard',
})
export default class ProjectCard extends Vue {
  goToProject() {
    this.$router.push('/projectId');
  }
}
</script>
