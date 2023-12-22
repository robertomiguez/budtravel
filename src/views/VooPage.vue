<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Voos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Voos</ion-title>
        </ion-toolbar>
      </ion-header>

      <VooContainer name="Voos" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import VooContainer from '@/components/VooContainer.vue';
</script>
