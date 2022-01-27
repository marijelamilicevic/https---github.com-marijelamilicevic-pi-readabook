<template>

<div>
  <img src="@/assets/books.jpg" class="img-fluid">    
      np
      <h1>Rezultati</h1>

  <div>
    {{ $route.params.naslov }}
{{knjiga}}

    <ul id="example-1">
  <li v-for="k in knjiga" :key="k.naslov">
    {{ k.naslov }} - {{k.autor}}
  </li>
</ul>
  </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase.js"

export default {
  name: "Rezultati",
  data: function() {
    return {
      knjiga:[]
      }
  },
 
  methods: {

    dohvati: function() {
   
      firebase.firestore().collection('knjiga').where("zanr", "==", this.$route.params.zanr).where("autor","==", this.$route.params.autor).where("naslov","==", this.$route.params.naslov)
        .get()
        .then(querySnapshot => {

          const documents = querySnapshot.docs.map(doc => doc.data())
          console.log(documents)
          this.knjiga = documents
        
        })
    }

  },
  mounted(){
    this.dohvati()

  }
  
};
</script>

<style scoped>
.rezultati { 
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
</style>
