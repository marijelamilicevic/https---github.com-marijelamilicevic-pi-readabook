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
        type="botton"
        @click="postojecikorisnik"
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
  name: "Postojeći korisnik",
  data() {
    return {
      email: "",
      lozinka: "",
    };
  },

  methods: {
    postojecikorisnik() {
      console.log("postojecikorisnik..." + this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.lozinka)
        .then(() => {
          if (firebase.auth().currentUser.emailVerified) {
            this.$router.replace({ name: "Home" });
          } else {
            console.log("Nisi registriran! Registriraj se.");
            firebase
              .auth()
              .signOut()
              .then(() => {
                this.$router.push({ name: "postojecikorisnik" });
              });
          }
        })

        // tu mi nešto nije okay, budem istraživala
        .catch((e) => {
          console.error(e.message);
          this.errorMessage = e.message;
        });
    },
  },
};
</script> 