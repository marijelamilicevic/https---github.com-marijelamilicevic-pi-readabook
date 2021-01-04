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

  //ovaj dio nešto ne radi pa dajte samo pogledajte vi video Vue.JS #4 pt.1 radila sam po njemu, i ne kužim u čemu je caka
  //eventualno što mi pada na pamet je ovaj dio sa this.username jer je kod nas this.imeiprezime, ali radila sam kao prof i onaj dio u dokumentaciji je isto tako prikazan
  // + kad sve to pokrenem na netu mi izbaci grešku tipa TypeError: _firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth is not a function ???
  // i samim time niti na Firebasu mi ne prikazuje u Userima ništa... tak da, ako znate i vidite što ja ne vidim, pls hahha

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