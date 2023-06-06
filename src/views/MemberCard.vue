<template>
  <v-row class="ma-5">
    <v-col
      class="member-card ma-0"
      cols="12"
      md="12"
      lg="12"
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
            <v-col cols="12" md="12" lg="12"> {{name}} {{lastName}}</v-col>
            <v-col cols="12" md="12" lg="12" class="pt-0"> {{username}} </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'TicketCard',
})
export default class TicketCard extends Vue {
  @Prop({type: String})
  name!: string

  @Prop({type: String})
  lastName!: string
  
  @Prop({type: String})
  username!: string
  
}
</script>

<style scoped>
.member-card {
  border-radius: 12px;
  background: #009688;
  color: white;
}
</style>
