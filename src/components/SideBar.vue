<template>
  <v-navigation-drawer app color="primary" dark permanent>
    <v-row justify="center" class="my-2">
      <v-col cols="4" md="4" lg="4">
        <v-icon x-large>mdi-ticket-account</v-icon>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="redirectTo(item.url)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="error" dark @click="logOut"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'SideBar',
})
export default class SideBar extends Vue {
  items = [
    { title: 'Proyectos', icon: 'mdi-treasure-chest', url: '/projects' },
    { title: 'Tareas', icon: 'mdi-ticket', url: '/tickets' },
    { title: 'Calendario', icon: 'mdi-calendar-alert', url: '/calendar' },
  ];

  redirectTo(url: string) {
    if (this.$router.currentRoute.path === url) return;

    this.$emit('changingRoute', url);
    this.$router.push(url);
  }

  logOut() {
    this.$router.push('/login')
  }
}
</script>
