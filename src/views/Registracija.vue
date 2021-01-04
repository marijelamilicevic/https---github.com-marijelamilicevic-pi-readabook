<template>
  <div class="vue-tempalte">
    <form>
      <h3>Registriraj se!</h3>

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
        type="botton"
        @click="registracija"
        class="btn btn-dark btn-lg btn-block"
      >
        Registriraj se!
      </button>
    </form>
  </div>
</template>
<script>
import firebase from "@/firebase";

export default {
  name: "Registracija",
  data() {
    return {
      imeiprezime: "",
      email: "",
      lozinka: "",
    };
  },

  methods: {
    registracija() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
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