<template>
  <v-row justify="center">
    <v-dialog v-if="!showDetails" v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" dark v-bind="attrs" v-on="on">
          Crear {{ modalTitle }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Crear {{ modalTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="ticketCreation && !projectCreation">
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Nombre*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea solo label="Descripcion"></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select :items="priorities" label="Prioridad"></v-select>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-select :items="asigner" label="Responsable"></v-select>
              </v-col>
              <v-col cols="12" md="5" lg="5">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea solo label="Comentarios"></v-textarea>
              </v-col>
            </v-row>

            <v-row v-if="!ticketCreation && !projectCreation">
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Nombre de usuario*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea solo label="Descripcion del rol"></v-textarea>
              </v-col>
            </v-row>

            <v-row v-if="projectCreation">
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Nombre del proyecto*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Codigo de proyecto*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea solo label="Descripcion del proyecto"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false"> Cancelar </v-btn>
          <v-btn color="success" @click="dialog = false"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-if="showDetails"
      v-model="showDetails"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-text>
          <v-container v-if="showDetails">
            <v-row v-if="ticketView">
              <v-col cols="12" sm="12" md="12">
                <v-text-field readonly label="Nombre*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea readonly solo label="Descripcion"></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  readonly
                  :items="priorities"
                  label="Prioridad"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-select
                  readonly
                  :items="asigner"
                  label="Responsable"
                ></v-select>
              </v-col>
              <v-col cols="12" md="5" lg="5">
                <v-text-field
                  v-model="date"
                  label="Picker without buttons"
                  prepend-icon="mdi-calendar"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea solo label="Descripcion"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="closeDetailCard"> Cancelar </v-btn>
          <v-btn color="success" @click="closeDetailCard"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component({
  name: 'ModalCreateCard',
})
export default class ModalCreateCard extends Vue {
  @Prop({ type: String, default: 'Ticket' })
  modalTitle!: string;

  @Prop({ type: Boolean, default: true })
  ticketCreation!: boolean;

  @Prop({ type: Boolean, default: false })
  projectCreation!: boolean;

  @Prop({ type: Boolean, default: false })
  showDetails!: boolean;

  @Prop({ type: Boolean, default: true })
  ticketView!: boolean;

  dialog = false;
  date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  menu2 = false;

  priorities = ['Muy alta', 'Alta', 'Media', 'Baja'];

  asigner = ['Erick', 'Alejandro', 'Molina', 'Garcia'];

  closeDetailCard() {
    this.$emit('closeDetailCard', false);
  }
}
</script>
