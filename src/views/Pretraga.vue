<template>
  <!-- ovdje nemre biti "glavnipregled" jer je stranica Pretrage, i dolje u style dijelu treba promijeniti-->
<div class="pretraga"> 
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">    <!-- ovo moramo dogovoriti kako ćemo urediti -->
      <p><a href="#" @click="odjava()">Izlazak iz aplikacije</a></p> 
      <h1>Pretraga knjige</h1>
      </div>
    <div>   <!-- možda izmjeniti row i col jer mi je ovo too much široko preko cijele stranice, ne znam -->
        <select v-model="zanr" class="col align-self-center" aria-label="Odaberi zanr">
  <option selected>Odaberi zanr</option>
  <option value="Lektira">Lektira</option>
  <option value="Kriminalistika">Kriminalistika</option>
  <option value="Putopis">Putopis</option>
  
</select>
<div class= ".col-md-">
  <input v-model="naslov" type="text" class="col align-self-center" placeholder="Upisi naslov" aria-label="Username">
</div>
<div class=".col-md-">
  <input v-model="autor" type="text" class="col align-self-center" placeholder="Upisi autora" aria-label="Username">
</div>
    </div>
    
   

    <div class="row align-items-center">
    <div class="button">
        <router-link to="/Dodaj_knjigu"
          ><button class="btn btn primary">
            <strong>Dodaj knjigu u bazu</strong>
          </button></router-link
        >
        <router-link :to="{name: 'Rezultati', params: {naslov: naslov, autor: autor, zanr: zanr} }"
          ><button class="btn btn primary">

            <strong>Pretraži</strong>   <!-- nemaš path niti stranicu Rezultati, ne znam jesi planirao to raditi kao zasebnu stranicu ili? ako da, onda ju treba dodati u index.html i isto je urediti kao zasebni Rezultati.vue da izbacuje samo rezultate -->
 
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
.pretraga { 
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
    margin: 20px;
    width: 20%;
    border-radius: 5px;
    padding: 1% 2%;
    background-color:rgb(231, 180, 69);
    font-size: 100%;
    margin: 5%;
    color: black;
    align-content: left;
    position: center;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
</style>
