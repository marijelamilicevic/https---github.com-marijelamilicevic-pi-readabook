<template>
 <div class="glavnipregled">
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">
      <p><a href="#" @click="odjava()">Izlazak iz aplikacije</a></p> 
      <h1>Pretraga knjige</h1>
      
      </div>
    <div>
        <select v-model="zanr" class="form-select" aria-label="Odaberi zanr">
  <option selected>Odaberi Žanr</option>
  <option value="1">Lektira</option>
  <option value="2">Kriminalistika</option>
  <option value="3">Putopis</option>
  <option value="3">Roman</option>
</select>
<div class="input-group mb-3">
  <input v-model="naslov" type="text" class="form-control" placeholder="Upisi naslov" aria-label="Username">
</div>
<div class="input-group mb-3">
  <input v-model="autor" type="text" class="form-control" placeholder="Upisi autora" aria-label="Username">
</div>
    </div>
    
   

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <div class="button">
        <router-link to="/Dodaj_knjigu"
          ><button class="btn btn primary">
            <strong>Dodaj knjigu</strong>
          </button></router-link
        >
        <router-link :to="{name: 'Rezultati', params: {naslov: naslov, autor: autor, zanr: zanr} }"
          ><button class="btn btn primary">
            <strong>Pretraži</strong>
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
      return {
          autor:"",
          naslov:"",
          zanr:""
      }
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
</style>
