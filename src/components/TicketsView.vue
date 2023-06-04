<template>
  <v-container class="my-6 ticket-view-container">
    <v-card height="100%" width="100%" color="teal lighten-3">
      <v-row class="ml-5">
        <v-col cols="12" md="12" lg="12">
          <h2 class="white--text">Mis Tickets</h2>
        </v-col>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col
          cols="12"
          md="12"
          lg="12"
          @click="showTicketCard(i)"
          v-for="i in [1, 2, 3]"
          :key="i"
        >
          <TicketCard class="mb-0"></TicketCard>
        </v-col>
      </v-row>
      <ModalCreateCard
        v-if="ticketCardView"
        :modalTitle="'Ticket'"
        :showDetails="true"
        :ticketView="true"
        @closeDetailCard="closeDetailCard"
      ></ModalCreateCard>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TicketCard from '@/views/TicketCard.vue';
import ModalCreateCard from '@/views/ModalCreateCard.vue';

@Component({
  name: 'TicketsView',
  components: {
    TicketCard,
    ModalCreateCard,
  },
})
export default class TicketsView extends Vue {
  ticketCardView = false;

  showTicketCard() {
    this.ticketCardView = !this.ticketCardView;
  }

  closeDetailCard(trigger: boolean) {
    this.ticketCardView = trigger;
  }
}
</script>

<style scoped>
.ticket-view-container {
  height: 90%;
}
</style>
