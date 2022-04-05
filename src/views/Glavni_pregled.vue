<template>
 <div class="glavnipregled">
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">
      <a href="#" @click="odjava()">Odjava</a> 
      <h1>Read a book</h1>
      <h3>Čitanje je jedna od najdražih aktivnosti svih knjiških moljaca. Čitanje može biti gušt, 
        čitanjem možemo naučiti puno, čitanje nas vodi u druge svjetove, čitanjem postajemo bolji ljudi. </h3>
      </div>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col" v-for="k in knjige" :key="k.id">
    <div class="card">
      <img src="@/assets/knjiga.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{k.naslov}} </h5>
        <p class="card-text">{{k.autor}}</p>
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
<h4>© Read a book 2022</h4>
 </div>
</template>

<script>

import { firebase } from "@/firebase.js";


export default {
  data: function () {
    return {
      knjige:[]
      }
  },

  methods: {
    odjava: function () {
        firebase
        .auth().signOut().then(() => {
      });
    this.$router.replace({name: "Home"});
    },
    
    dohvati: function() {
   
      firebase.firestore().collection('knjiga')
        .get()
        .then(querySnapshot => {

          const documents = querySnapshot.docs.map(doc => doc.data())
          console.log(documents)
          this.knjige = documents
        
        })
    }

  },
  mounted(){
    this.dohvati()

  }
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
h4{
  color: black;
  text-align: center;
  font-family: 'Times New Roman';
  font-size: 10px;
  font-style: italic;
}
a{
  color: black;
  font-size: 15px;
  text-align: right;
  font-style: bold;
  font-family: 'Times New Roman';
}
button {
    margin: 4px;
    border-radius: 5px;
    background-color:rgb(231, 180, 69);
    margin: 5%;
    color: black;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
.card{
    align-items: center;
    justify-content: center;
}
</style>
