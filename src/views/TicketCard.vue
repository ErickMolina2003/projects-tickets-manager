<template>
  <v-row class="ma-5 ticket-card">
    <v-col cols="6" md="6" lg="6" align-self="center">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <h5>Sidebar 1 - crear un componente para el main layout</h5>
        </v-col>
        <v-col cols="auto" md="auto" lg="auto"> 12/12/2023 </v-col>
        <v-col cols="auto" md="auto" lg="auto"> Por hacer </v-col>
        <v-col cols="auto" md="auto" lg="auto">
          <v-icon>mdi-account</v-icon> Erick Molina
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" md="6" lg="6" align-self="center">
      <v-row justify="end">
        <v-col cols="auto" md="auto" lg="auto">
          <v-icon>mdi-ticket</v-icon> Ticket-1
        </v-col>
        <v-col cols="auto" md="auto" lg="auto" align-self="center">
          <h5>Alta prioridad</h5>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'TicketCard',
})
export default class TicketCard extends Vue {}
</script>

<style scoped>
.ticket-card {
  border-radius: 12px;
  background: #009688;
  color: white;
}
</style>
