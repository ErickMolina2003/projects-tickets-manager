<template>
  <v-row class="ma-5">
    <v-col
      v-for="i in [1, 2, 3, 4, 5]"
      :key="i"
      class="member-card ma-5"
      cols="2"
      md="2"
      lg="2"
    >
      <v-row>
        <v-col cols="3" md="3" lg="3" class="pr-0">
          <v-img
            height="4rem"
            width="4rem"
            src="https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png"
          ></v-img>
        </v-col>
        <v-col cols="9" md="9" lg="9">
          <v-row>
            <v-col cols="12" md="12" lg="12"> Erick Molina</v-col>
            <v-col cols="12" md="12" lg="12" class="pt-0"> 70 tickets asignados </v-col>
          </v-row>
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
.member-card {
  border-radius: 12px;
  background: #009688;
  color: white;
}
</style>
