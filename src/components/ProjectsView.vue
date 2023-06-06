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
      <v-col
        v-for="project in userProjects.projects"
        :key="project.id"
        cols="3"
        md="3"
        lg="3"
      >
        <ProjectCard
          :projectTitle="project.name"
          :description="project.description"
          :projectId="project.id"
        ></ProjectCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ProjectCard from '../views/ProjectCard.vue';
import ModalCreateCard from '@/views/ModalCreateCard.vue';
import UserStore from '@/store/models/user';
import { getModule } from 'vuex-module-decorators';

@Component({
  components: {
    ProjectCard,
    ModalCreateCard,
  },
  name: 'ProjectsView',
})
export default class ProjectsView extends Vue {
  userStore = getModule(UserStore, this.$store);

  user = {};

  mounted() {
    this.user = this.userStore.user;
  }

  get userProjects() {
    return this.userStore.user;
  }
}
</script>
