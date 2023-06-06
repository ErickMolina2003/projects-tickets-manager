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

    <v-card-title>{{ projectTitle }}</v-card-title>

    <v-card-text>
      <div>{{description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="success" block rounded @click="goToProject"> Ver </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import UserStore from '@/store/models/user';
import { getModule } from 'vuex-module-decorators';

@Component({
  name: 'ProjectCard',
})
export default class ProjectCard extends Vue {
  @Prop({ type: String, default: 'Project-title' })
  projectTitle!: string;

  @Prop({ type: String, default: 'Project-description' })
  description!: string;

  @Prop({ type: Number, })
  projectId!: number;

  userStore = getModule(UserStore, this.$store);


  goToProject() {
    this.userStore.setProjectId(this.projectId);
    this.$router.push(`/project/${this.projectId}`);
  }
}
</script>
