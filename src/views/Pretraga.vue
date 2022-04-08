<template>
  
<div class="pretraga"> 
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">    <!-- ovo moramo dogovoriti kako ćemo urediti -->
      <a href="#" @click="odjava()">Odjava</a> 
      <h1>Pretraga knjige</h1>
      </div>
    
    
    <div style="width:50%; margin:0 auto;">   
        <h2>Odaberi žanr za pretragu</h2>
        <select v-model="zanr" class="form-control" placeholder="Odaberi zanr" aria-label= "Username">
            <option value="Drama">Drama</option>
            <option value="Znanstvena fantastika">Znanstvena fantastika</option>
            <option value="Ljubavni roman">Ljubavni roman</option>
            <option value="Dječja književnost">Dječja književnost</option>
            <option value="Lektire">Lektire</option>
      </select>
 <div class="divider"></div>
      <div class= "input-group mb-3">
        <input v-model="naslov" type="text" class="form-control" placeholder="Upiši naslov" aria-label="Username">
      </div>
      <div class="input-group mb-3">
        <input v-model="autor" type="text" class="form-control" placeholder="Upiši autora" aria-label="Username">
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

                <strong>Pretraži</strong>   
    
              </button></router-link
                >
              </div>
        </div>
    </div>  
<img src="@/assets/books2.jpg" class="img-fluid" />
<h5>© Read a book 2022</h5>
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
h2{
  color: black;
  text-align: center;
  font-family: 'Times New Roman';
  font-size: 17px;
}
h3 {
  text-align: center;
  font-style: italic;
  font-family: 'Times New Roman';
  font-size: 20px;
  color: black;
}
a{
  color: black;
  font-size: 15px;
  text-align: right;
  font-style: bold;
  font-family: 'Times New Roman';
}
button {
    margin: 20px;
    width: 40%;
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
.divider{
    height: 25px;
}
h5{
  color: black;
  text-align: center;
  font-family: 'Times New Roman';
  font-size: 10px;
  font-style: italic;
}
</style>
