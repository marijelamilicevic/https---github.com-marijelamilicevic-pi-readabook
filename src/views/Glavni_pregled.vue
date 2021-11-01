<template>
 <div class="glavnipregled">
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">
      <p><a href="#" @click="odjava()">Izlazak iz aplikacije</a></p> 
      <h1>Read a book</h1>
      <h3>Čitanje je jedna od najdražih aktivnosti svih knjiških moljaca. Čitanje može biti gušt, 
        čitanjem možemo naučiti puno, čitanje nas vodi u druge svjetove, čitanjem postajemo bolji ljudi. </h3>
      </div>
    <div class="card" style="max-width: 535px">
      <div class="row g-0">
        <div class="col-md-4">
      <img src="@/assets/HP1.jpg" class="img-fluid rounded-start" alt="...">
        </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Harry Potter i Kamen mudraca Autor: J.K. Rowling</h5>
        <p class="card-text">Roditelji Harryja Pottera stradali su dok je još bio jednogodišnja beba. 
          Deset je dugih i neveselih ljeta Harry proveo kao neželjen gost pod krovom Dursleyjevih, 
          pod grdnjom navijek ljute tete Petunije...</p>
         <button type="button" class="btn btn-lg">Više o knjizi</button>
      </div>
    </div>
  </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <div class="button">
        <router-link to="/Dodaj_knjigu"
          ><button class="btn btn primary">
            <strong>Dodaj knjigu u bazu</strong>
          </button></router-link
        >
        <router-link to="/Pretraga"
          ><button class="btn btn primary">
            <strong>Pretraga baze knjiga</strong>
          </button></router-link
        >
      </div>
</div>
<img src="@/assets/books2.jpg" class="img-fluid" />
 </div>
</template>

<script>

import { firebase } from "@/firebase.js";


export default {
  data: function () {
  },

  methods: {
    odjava: function () {
        firebase
        .auth().signOut().then(() => {
      });
    this.$router.replace({name: "Home"});
    },
  },
};
</script>

<style scoped>
.glavnipregled {
  width: fit-content;
  height: fit-content;
  background-color: rgb(219, 139, 19);
  background-attachment: fixed; 
}
h1 {
  text-align: center;
  font-family: 'Times New Roman';
  font-size: 100px;
  color: black;
}
h3 {
  text-align: center;
  font-style: italic;
  font-family: 'Times New Roman';
  font-size: 20px;
  color: black;
}
p{
  color: black;
  text-align: right;
  font-family: 'Times New Roman';
  position: right;
}
a{
  color: black;
  font-size: 20px;
}
button {
    margin: 4px;
    width: 50%;
    border-radius: 5px;
    padding: 1% 5%;
    background-color:rgb(231, 180, 69);
    font-size: 100%;
    margin: 5%;
    color: black;
    align-content: center;
    position: center;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
.card{
    align-items: center;
    justify-content: center;
}
</style>
