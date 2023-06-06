<template>
  <v-container class="my-6 project-view-container">
    <v-card height="100%" width="100%" color="teal lighten-3">
      <v-row justify="space-between">
        <v-col cols="3" md="3" lg="3" align-self="center" class="ml-10">
          <h2 class="white--text">{{project.project.name}}</h2>
        </v-col>
        <v-col cols="2" md="2" lg="2" align-self="center">
          <ModalCreateCard
            :modalTitle="triggerCreateTitle"
            :ticketCreation="ticketView"
          ></ModalCreateCard>
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

      <v-row v-if="ticketView" class="mb-0 pb-0">
        <v-col
          class="mb-0 pb-0"
          cols="12"
          md="12"
          lg="12"
          @click="showTicketCard(i)"
          v-for="ticket in project.tickets"
          :key="ticket.id"
        >
          <TicketCard
            class="mb-0"
            :name="ticket.name"
            :deadline="ticket.dead_line"
            :status="ticket.status"
            :id="ticket.id"
          ></TicketCard>
        </v-col>
      </v-row>
      <ModalCreateCard
        v-if="ticketCardView"
        :modalTitle="'Ticket'"
        :showDetails="true"
        :ticketView="true"
        @closeDetailCard="closeDetailCard"
      ></ModalCreateCard>
      <v-row v-if="membersView">
        <v-col
          class="mb-0 pb-0"
          cols="4"
          md="4"
          lg="4"
          v-for="user in project.clients"
          :key="user.id"
        >
          <MemberCard
            :name="user.first_name"
            :lastName="user.last_name"
            :username="user.username"
          ></MemberCard>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TicketCard from '@/views/TicketCard.vue';
import MemberCard from '@/views/MemberCard.vue';
import NotFound from '@/views/NotFound.vue';
import ModalCreateCard from '@/views/ModalCreateCard.vue';
import { getProject } from '@/services/ProjectsService';

@Component({
  components: {
    TicketCard,
    MemberCard,
    NotFound,
    ModalCreateCard,
  },
  name: 'SingleProjectView',
})
export default class SingleProjectView extends Vue {
  tickets = [];
  users = [];
  ticketView = true;
  membersView = false;

  ticketCardView = false;

  projectId = '';
  project = {};

  async mounted() {
    console.log(this.$router.currentRoute.params.pathMatch);
    this.projectId = this.$router.currentRoute.params.pathMatch;
    this.project = await getProject(this.projectId);
    console.log(this.project);
  }

  showTicketCard() {
    this.ticketCardView = !this.ticketCardView;
  }

  closeDetailCard(trigger: boolean) {
    this.ticketCardView = trigger;
  }

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
