<template>
  <div class="about">
    <h1>Ljubitelj si knjiga? Registriraj se!</h1>
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
                placeholder="Unesi ime i prezime"
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
                placeholder="Unesi e-mail"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                v-model="lozinka"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Unesi lozinku"
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
        <div class="col-sm"></div>
      </div>
    </div>
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
        });
      console.log("Nastavak...");

      <router-link to="/Glavnipregled.vue"></router-link>;
    },
  },
};
</script> 
<style scoped>
.novikorisnik {
  width: 1494px;
  height: 1021px;
  background-color: saddlebrown;
  background-attachment: fixed;
  background-image: url("/assets/naslovna.jpg");
  border-radius: undefinedpx 0 0 0;
}
button {
  position: absolute;
  width: 244px;
  height: 51px;
  left: 66px;
  top: 927px;

  background: #eaca7a;
  border-radius: 10px;
  position: absolute;

  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
h1 {
  position: right;
  width: 870px;
  height: 174px;
  left: 562px;
  top: 42px;

  font-family: Great Vibes;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 225px;
  text-align: center;

  color: #eaca7a;
}
</style>