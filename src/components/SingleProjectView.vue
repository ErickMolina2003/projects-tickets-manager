<template>
  <v-container class="my-6 project-view-container">
    <v-card height="100%" width="100%" color="teal lighten-3">
      <v-row justify="space-between">
        <v-col cols="3" md="3" lg="3" align-self="center" class="ml-10">
          <h2 class="white--text">Project Title</h2>
        </v-col>
        <v-col cols="2" md="2" lg="2">
          <v-btn color="success" dark> Crear {{ triggerCreateTitle }} </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3" md="3" lg="3" align-self="center" class="ml-10">
          <v-btn
            text
            class="white--text"
            @click="triggetTicketsView"
            :color="ticketView ? 'green darken-4' : ''"
            >Tickets</v-btn
          >
          <v-btn
            text
            class="white--text"
            @click="triggerMembersView"
            :color="membersView ? 'green darken-4' : ''"
            >Miembros</v-btn
          >
        </v-col>
      </v-row>

      <span v-if="ticketView">
        <TicketCard v-for="i in [1, 2, 3, 4, 5]" :key="i"></TicketCard>
      </span>
      <span v-if="membersView">
        <MemberCard></MemberCard>
      </span>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TicketCard from '@/views/TicketCard.vue';
import MemberCard from '@/views/MemberCard.vue';
import NotFound from '@/views/NotFound.vue';

@Component({
  components: {
    TicketCard,
    MemberCard,
    NotFound,
  },
  name: 'SingleProjectView',
})
export default class SingleProjectView extends Vue {
  tickets = [];
  ticketView = true;
  membersView = false;

  triggetTicketsView() {
    this.membersView = false;
    this.ticketView = true;
  }

  triggerMembersView() {
    this.ticketView = false;
    this.membersView = true;
  }

  get triggerCreateTitle() {
    if (this.ticketView) return 'Ticket';
    return 'Miembro';
  }
}
</script>

<style scoped>
.project-view-container {
  height: 90%;
}
</style>
