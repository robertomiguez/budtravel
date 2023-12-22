<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="home"
          href="/tabs/home"
        >
          <ion-icon
            aria-hidden="true"
            :icon="browsersOutline"
          />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="voo"
          href="/tabs/voo"
        >
          <ion-icon
            aria-hidden="true"
            :icon="airplaneOutline"
          />
          <ion-label>Voos</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="sobre"
          href="/tabs/sobre"
        >
          <ion-icon
            aria-hidden="true"
            :icon="bodyOutline"
          />
          <ion-label>Sobre</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { browsersOutline, bodyOutline, airplaneOutline } from 'ionicons/icons';
</script>
