<template>
 <div class="glavnipregled">
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">
      <p><a href="#" @click="odjava()">Izlazak iz aplikacije</a></p> 
      <h1>Read a book</h1>
      <h3>Čitanje je jedna od najdražih aktivnosti svih knjiških moljaca. Čitanje može biti gušt, 
        čitanjem možemo naučiti puno, čitanje nas vodi u druge svjetove, čitanjem postajemo bolji ljudi. 
        Ukratko, čitanje može biti mnogo toga. Da ne bi bilo da je samo naše mišljenje bitno, sad ćemo dati riječ 
        poznatim autoricama i autorima, kritičarima i glazbenicima i vidjeti na koji se način knjige mogu čitati, 
        kakav je to dobar čitatelj, kakvih se čitatelja boje, a naposljetku kako uopće doživljavaju čitanje.</h3>
      </div>
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
  width: 1518px;
  height: 750px;
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
</style>
