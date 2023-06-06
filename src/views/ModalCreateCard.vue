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
                <v-text-field
                  v-model="newticketName"
                  label="Nombre*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  v-model="newticketDescription"
                  solo
                  label="Descripcion"
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  v-model="newTicketStatus"
                  :items="priorities"
                  label="Estatus"
                ></v-select>
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
                  v-model="idToAttach"
                  label="id de usuario*"
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
                  v-model="newProjectTitle"
                  label="Nombre del proyecto*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="newProjectCode"
                  label="Codigo de proyecto*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  v-model="newProjectDescription"
                  solo
                  label="Descripcion del proyecto"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false"> Cancelar </v-btn>
          <v-btn v-if="projectCreation" color="success" @click="createProject">
            Crear
          </v-btn>
          <v-btn v-if="ticketCreation" color="success" @click="createTicket">
            Crear
          </v-btn>
          <v-btn
            v-if="!ticketCreation && !projectCreation"
            color="success"
            @click="attachUser"
          >
            Crear
          </v-btn>
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
import { createProject, attachProjectUser } from '@/services/ProjectsService';
import { createTicket } from '@/services/TicketsService';
import { getUser } from '@/services/UsersService';
import UserStore from '@/store/models/user';
import { getModule } from 'vuex-module-decorators';
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

  userStore = getModule(UserStore, this.$store);

  newProjectTitle = '';

  newProjectCode = '';

  newProjectDescription = '';

  newticketName = '';

  newticketDescription = '';

  newTicketStatus = '';

  idToAttach = -1;

  dialog = false;
  date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  menu2 = false;

  priorities = ['Pendiente', 'Progreso', 'Finalizada', 'QA'];

  asigner = ['Erick', 'Alejandro', 'Molina', 'Garcia'];

  closeDetailCard() {
    this.$emit('closeDetailCard', false);
  }

  async createProject() {
    this.dialog = false;
    const project = {
      name: this.newProjectTitle,
      name_code: this.newProjectCode,
      description: this.newProjectDescription,
    };
    const newProject = await createProject(project);
    console.log(newProject);
    const newProjectUser = {
      project_id: newProject.project.id,
      client_id: this.userStore.userId,
    };
    const attachedProject = await attachProjectUser(newProjectUser);
    console.log(attachedProject);
    const newUser = await getUser(this.userStore.userId);
    this.userStore.setUser(newUser);
  }

  async createTicket() {
    this.dialog = false;

    const ticket = {
      project_id: this.userStore.projectId,
      name: this.newticketName,
      description: this.newticketDescription,
      status: this.newTicketStatus,
      dead_line: this.date,
    };

    console.log(ticket);
    const newTicket = await createTicket(ticket);
    console.log(newTicket);
  }

  async attachUser() {
    this.dialog = false;
    const userId = this.idToAttach;
    const newProjectUser = {
      project_id: userId,
      client_id: this.userStore.userId,
    };
    const attachedProject = await attachProjectUser(newProjectUser);
    console.log(attachedProject);
  }
}
</script>
