<template>

<div>
  <img src="@/assets/books.jpg" class="img-fluid" />    
    
      <h1>Rezultati</h1>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Naslov</th>
      <th scope="col">Autor</th>
      <th scope="col">Žanr</th>
      <th scope="col">Broj stranica</th>
      <th scope="col">Nakladnik</th>
      <th scope="col">Link</th>
      </tr>

      
      </thead>
        <tbody>
    <tr v-for="k in knjige" :key="k.naslov">  
      <td>{{k.naslov}}</td>
      <td>{{k.autor}}</td>
      <td>{{k.zanr}}</td>
      <td>{{k.broj_stranica}}</td>
      <td>{{k.nakladnik}}</td>
      <td>{{k.link}}</td>
    </tr>
   
  </tbody>
      </table>
  <div>

  </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase.js"

export default {
  name: "Rezultati",
  data: function() {
    return {
      knjige:[]
      }
  },
 
  methods: {

    dohvati: function() {
   
      firebase.firestore().collection('knjiga').where("zanr", "==", this.$route.params.zanr).where("autor","==", this.$route.params.autor).where("naslov","==", this.$route.params.naslov)
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
