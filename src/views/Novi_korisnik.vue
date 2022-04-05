<template>
  <div class="novikorisnik">
    <img src="@/assets/books.jpg" class="img-fluid">
    <h1>Read a book</h1>
    <h3>„Oh, kako je dobro biti među ljudima koji čitaju knjige.” – Rainer Maria Rilke</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Ime i prezime</label>
              <input
                type="text"
                v-model="imeiprezime"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Tvoje ime i prezime"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail adresa</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Tvoj e-mail"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                v-model="lozinka"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Tvoja lozinku"
              />
            </div>
            <button
              type="button"
              @click="novikorisnik()"
              class="btn btn-lg btn-lg"
            >Registriraj se!
            <router-link to="Glavni_pregled"></router-link> 
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
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
      imeiprezime: "",
      email: "",
      lozinka: "",
    };
  },

  methods: {
    novikorisnik: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.lozinka)
        .then(() => {
          console.log("Uspješna registracija!");
          alert("Uspješna registracija!")
          this.$router.replace({name: "Postojeći korisnik"});

        })
        .catch (function (err) {
        console.error("Greška!", err) 
        alert (err.message)
      })
      console.log("Nastavak...");
    },
  },
};
</script> 

<style scoped>
.novikorisnik {
  width: fit-content;
  height:fit-content;
  background-color: rgb(219, 139, 19);
  background-attachment: fixed; 
}
button {
    margin: 4px;
    width: 40%;
    border-radius: 5px;
    padding: 1% 5%;
    background-color:rgb(231, 180, 69);
    font-size: 130%;
    margin: 5%;
    color: black;
    align-content: center;
    position: center;
}
button:hover {
  box-shadow: 9px 9px 7px black;
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
</style>