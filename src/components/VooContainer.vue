<template>
  <!-- <div id="container">
    <strong>{{ name }}</strong>
    <p>List Tickets</p>
  </div>
  <h1>Flexbox Blog-Card</h1> -->

  <div class="blog-wrapper">
    <div class="blog-card">
      <div class="card-img">
        <img
          src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&
          ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        />
        <h1>New York</h1>
      </div>
      <div class="card-details">
        <span>
          <ion-icon :icon="calendarOutline"></ion-icon> 20/Fev - 27/Fev</span
        ><span> <ion-icon :icon="cashOutline"></ion-icon> 402,00</span>
      </div>
      <div class="card-text">
        <p>Tarifa Basic: item pessoal, bagagem de mão</p>
      </div>
      <div class="read-more">Leia mais</div>
    </div>
    <div class="blog-card">
      <div class="card-img">
        <img
          src="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixlib=rb-1.2.1&
          ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
        />
        <h1>San Francisco</h1>
      </div>
      <div class="card-details">
        <span>
          <ion-icon :icon="calendarOutline"></ion-icon> 15/Mar - 23/Mar</span
        ><span> <ion-icon :icon="cashOutline"></ion-icon> 492,00</span>
      </div>
      <div class="card-text">
        <p>Tarifa Classic: item pessoal, bagagem de mão, bagagem despachada</p>
      </div>
      <div class="read-more">Leia mais</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { calendarOutline, cashOutline } from 'ionicons/icons';
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
  top: 20%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

body {
  background: #ececec;
}

h1 {
  font-size: 32px;
  margin-top: 30px;
  font-family: 'Oswald', sans-serif;
  text-align: center;
}
.blog-wrapper {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  .blog-card {
    max-width: 300px;
    margin: 15px;
    background: #fff;
    border: 1px solid #3880ff;
    text-align: center;
    cursor: pointer;
    &:hover {
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
      .card-img {
        img {
          opacity: 0.8;
        }
      }
    }
    .card-img {
      position: relative;
      text-align: center;
      background: #3880ff;
      img {
        max-height: 180px;
        width: 100%;
        border-bottom: 4px solid #3880ff;
      }
      &:before {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        margin-left: -10px;
        width: 0;
        height: 0;
        border-top: solid 10px #3880ff;
        border-left: solid 10px transparent;
        border-right: solid 10px transparent;
      }
      h1 {
        position: absolute;
        margin: 0;
        font-size: 42px;
        bottom: 15px;
        width: 100%;
        color: #fff;
        font-family: 'Slabo 27px', serif;
      }
    }
    .card-details {
      margin-top: 30px;
      font-family: 'Roboto', sans-serif;
      color: #3c3c3c;
      span {
        padding: 0 10px;
        i {
          margin-right: 5px;
        }
      }
    }
    .card-text {
      padding: 30px 15px;
      font-family: 'Roboto', sans-serif;
      line-height: 22px;
      color: #3c3c3c;
    }
    .read-more {
      display: inline-block;
      width: auto;
      text-align: center;
      text-transform: uppercase;
      background: #3880ff;
      color: #fff;
      padding: 15px;
      margin-bottom: 30px;
      font-family: 'Oswald', sans-serif;
      &:hover {
        background: darken(#3880ff, 20%);
      }
    }
  }
}
</style>
