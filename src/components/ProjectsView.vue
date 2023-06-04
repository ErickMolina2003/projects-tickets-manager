<template>
  <v-container>
    <v-row class="mt-2" justify="end">
      <v-col cols="2" md="2" lg="2">
        <ModalCreateCard
          :modalTitle="'Proyecto'"
          :projectCreation="true"
        ></ModalCreateCard>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="i in [1, 2, 3]" :key="i" cols="3" md="3" lg="3">
        <ProjectCard></ProjectCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ProjectCard from '../views/ProjectCard.vue';
import ModalCreateCard from '@/views/ModalCreateCard.vue';

@Component({
  components: {
    ProjectCard,
    ModalCreateCard,
  },
  name: 'ProjectsView',
})
export default class ProjectsView extends Vue {}
</script>
