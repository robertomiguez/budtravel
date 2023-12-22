<template>
  <div id="container">
    <strong
      >Avisaremos quando os voos para destinos incríveis ficarem muito
      baratos!</strong
    >
    <div id="subscribe">
      <ion-input
        type="email"
        aria-label="Email"
        placeholder="seu@email.com"
      ></ion-input>
      <ion-button color="light">
        assine
        <ion-icon
          slot="end"
          :icon="mailOutline"
        ></ion-icon>
      </ion-button>
    </div>
    <p id="description">
      Inscreva-se para receber nossos boletins informativos gratuitos de alerta
      de voo
    </p>
  </div>
</template>

<script setup lang="ts">
import { IonInput, IonButton, IonIcon } from '@ionic/vue';
import { mailOutline } from 'ionicons/icons';
defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  text-align: center;
  position: relative;
  left: 0;
  right: 0;
  top: 33%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container #subscribe {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin: 0 auto;
  padding-top: 50px;
}

#subscribe ion-input {
  margin-right: 20px;
}

#subscribe ion-button {
  margin-right: 20px;
}

#description {
  padding-bottom: 50px;
}

@media (min-width: 48em) {
  #container {
    top: 20%;
  }
}
</style>
