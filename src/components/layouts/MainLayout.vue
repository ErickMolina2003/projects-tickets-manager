<template>
  <v-app>
    <SideBar @changingRoute="getHeaderTitle"></SideBar>

    <v-main class="pl-0">
      <MainHeader :title="headerTitle"></MainHeader>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SideBar from '../SideBar.vue';
import MainHeader from '../MainHeader.vue';

@Component({
  components: {
    SideBar,
    MainHeader,
  },
  name: 'MainLayout',
})
class MainLayout extends Vue {
  headerTitle = 'Mis proyectos';

  getHeaderTitle(url: string) {
    let newHeaderTitle = url.replace('/', '');
    if (newHeaderTitle == 'projects') {
      newHeaderTitle = 'Mis Proyectos';
    } else if (newHeaderTitle == 'tickets') {
      newHeaderTitle = 'Mis Tareas';
    } else if (newHeaderTitle == 'calendar') {
      newHeaderTitle = 'Calendario';
    }
    this.headerTitle = newHeaderTitle;
  }
}

export default MainLayout;
</script>
