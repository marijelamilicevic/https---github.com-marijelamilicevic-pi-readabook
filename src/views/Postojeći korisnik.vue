<template>
  <div class="postojecikorisnik">
    <img src="@/assets/books.jpg" class="img-fluid">
    <h1>Read a book</h1>
    <h3>„Knjiga je dar koji možeš otvarati opet i opet.” – Garrison Kellior</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail adresa:</label>
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
                placeholder="Tvoja lozinka"
              />
            </div>
             <button
              type="button"
              @click="Postojećikorisnik()"
              class="btn btn-lg btn-lg "
            >
            Prijavi se!
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { firebase } from "@/firebase.js";

export default {
  name: "Postojećikorisnik",
  data () {
    return {
      email: "",
      lozinka: "",
    }
  },
  methods: {
    Postojećikorisnik: function() {
      console.log("Postojećikorisnik..." + this.email)

      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.lozinka)
      .then((result) => {
        console.log("Uspješna prijava!", result);
       
       this.$router.replace({name: "Glavni pregled"});
      })
      .catch (function (err) {
        console.error("Greška!", err)
      });
    },
  },
};

</script>

<style scoped>
.postojecikorisnik {
  width: 1518px;
  height: 750px;
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
