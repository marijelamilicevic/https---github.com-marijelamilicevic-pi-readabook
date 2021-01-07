<template>
  <div class="vue-tempalte">
    <form>
      <h3>Postojeći si korisnik? Prijavi se!</h3>

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

      <!-- //treba dodati još onaj dio tipa Nemaš račun? pa da ga prebaci na Novi korisnik  -->

      <button
        type="button"
        @click="postojećikorisnik()"
        class="btn btn-dark btn-lg btn-block"
      >
        Prijavi se!
      </button>
    </form>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "postojecikorisnik",
  data() {
    return {
      email: "",
      lozinka: "",
    };
  },
  methods: {
    postojećikorisnik() {
      console.log("postojećikorisnik..." + this.email);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.lozinka)
        .then(function (result) {
          console.log("Uspješna prijava!", result);
        })
        .catch(function (e) {
          console.error("Greška!!!", e);
        });
    },
  },
};
</script>