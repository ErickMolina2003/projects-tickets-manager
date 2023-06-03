<template>
  <h1 class="content-404">
    Aun no tienes ningun<br />
    {{ content }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'NotFound',
})
export default class NotFound extends Vue {
  @Prop({ type: String, default: '' })
  content!: string;
}
</script>

<style scoped>
.content-404 {
  font-size: 5rem;
  text-align: center;
  color: #004d40;
  margin-top: 10%;
}
</style>
