<template>
  <div class="vue-tempalte">
    <form>
      <h3>Želiš postati korisnik? Registriraj se!</h3>

      <div class="form-group">
        <label>Ime i prezime</label>
        <input
          type="text"
          v-model="imeiprezime"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>E-mail adresa</label>
        <input
          type="email"
          v-model="email"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Lozinka</label>
        <input
          type="password"
          v-model="lozinka"
          class="form-control form-control-lg"
        />
      </div>

      <button
        type="button"
        @click="novikorisnik"
        class="btn btn-dark btn-lg btn-block"
      >
        Registriraj se!
      </button>
    </form>
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
        .then(function () {
          console.log("Uspješna registracija!");
        })
        .catch(function (error) {
          console.error("Došlo je do greške!", error);
        });
      console.log("Nastavak");
    },
  },
};
</script> 