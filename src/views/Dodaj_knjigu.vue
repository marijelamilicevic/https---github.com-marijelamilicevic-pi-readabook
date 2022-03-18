<template>
  <div class="dodaj">
    <div>
      <img src="@/assets/books.jpg" class="img-fluid" />
      <h1>Read a book</h1>
      <h3> „Toliko knjiga, a tako malo vremena.” – Frank Zappa</h3>
      <h2>Preko forme i traženih podataka dodaj knjigu u bazu.</h2>
      <form class="row g-3">
  <div class="col-md-6">
    <label for="naslovKnjige" class="form-label">Naslov</label>
    <input v-model="naslov" type="text" class="form-control" id="" placeholder="Ime knjige">
  </div>
  <div class="col-md-6">
    <label for="imeAutora" class="form-label">Autor</label>
    <input v-model="autor" type="text" class="form-control" id="" placeholder="Ime i prezime autora">
  </div>
  <div class="col-12">
    <label for="kratkiSadrzaj" class="form-label">Sadržaj knjige</label>
    <input v-model="sadrzaj" type="text" class="form-control" id="" placeholder="Kratki opis ili sadržaj knjige">
  </div>
  <div class="col-12">
    <label for="poveznica" class="form-label">Poveznica za online čitanje/kupovinu</label>
    <input v-model="link" type="link" class="form-control" id="" placeholder="Poveznica na online čitanje ili online kupovinu knjige">
  </div>
  <div class="col-md-6">
    <label for="Nakladnik" class="form-label">Nakladnik</label>
    <input v-model="nakladnik" type="text" class="form-control" id="" placeholder="Nakladnik knjige u RH">
  </div>
  <div class="col-md-4">
    <label for="zanr" class="form-label">Žanr</label>
    <select v-model="zanr" id="" class="form-select">
      <option selected>Žanr</option>
      <option value="Drama">Drama</option>
      <option value="Znanstvena fantastika">Znanstvena fantastika</option>
      <option value="Ljubavni roman">Ljubavni roman</option>
      <option value="Dječja književnost">Dječja književnost</option>
      <option value="Lektire">Lektire</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="brstranica" class="form-label">Broj stranica</label>
    <input v-model="broj_stranica" type="number" class="form-control" id="">
  </div>
  <div class="col-12">
  </div>
  <div class="col-12">
    <button type="button" class="btn btn-lg">Dodaj više podataka</button>
    <button v-on:click="dodaj_knjigu" type="button" class="btn btn-lg">Dodaj knjigu u bazu</button>
  </div>
</form>
      <img src="@/assets/books2.jpg" class="img-fluid" />
    </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase.js"
export default {
  name: "Dodaj",

data: function() {
    return {
      broj_stranica:0,
      zanr:"",
      naslov:"",
      autor:"",
      nakladnik:"",
      link:"",
      sadrzaj:""
            }
  },
 
  methods: {
dodaj_knjigu: function () {
  
  const nova_knjiga = {
naslov:this.naslov,
zanr:this.zanr,
autor:this.autor,
link:this.link,
nakladnik:this.nakladnik,
broj_stranica:this.broj_stranica,
sadrzaj_knjige:this.sadrzaj

  }
  console.log(nova_knjiga)

  firebase.firestore().collection('knjiga').add(nova_knjiga)
  alert("Knjiga dodana u bazu")
  }
  }
};
</script>

<style scoped>
.dodaj {
  width: fit-content;
  height: fit-content;
  background-color: rgb(219, 139, 19);
  background-attachment: fixed;
}
button {
  margin: 4px;
  width: auto;
  border-radius: 20px;
  padding: 1% 5%;
  background-color: rgb(231, 180, 69);
  font-size: 130%;
  margin: 5%;
  color: black;
  align-content: left;
}
.divider {
  width: 150px;
  display: inline-block;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
h1 {
  text-align: center;
  font-family: "Times New Roman";
  font-size: auto;
  color: black;
}
h2 {
  text-align: left;
  font-style:normal;
  font-family: "Times New Roman";
  font-size: 20px;
  color: black;
}
h3 {
  text-align: center;
  font-style: italic;
  font-family: "Times New Roman";
  font-size: 20px;
  color: black;
}
</style>