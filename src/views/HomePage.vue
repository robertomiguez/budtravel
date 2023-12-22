<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">BudTravel</ion-title>
        </ion-toolbar>
      </ion-header>

      <HomeContainer name="Home" />
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
import HomeContainer from '@/components/HomeContainer.vue';
import VooContainer from '@/components/VooContainer.vue';
</script>
