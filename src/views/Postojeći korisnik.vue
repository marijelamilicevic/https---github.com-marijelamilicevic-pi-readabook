<template>
  <div class="about">
    <h3>Postojeći si korisnik? Prijavi se!</h3>
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
              @click="postojećikorisnik;"
              class="btn btn-dark btn-lg btn-block"
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

      <router-link to="/Glavnipregled.vue"></router-link>;
    },
  },
};
</script>

<style scoped>
.postojećikorisnik {
  width: 1494px;
  height: 1021px;
  background-color: gray;
  background-attachment: fixed;
  background-image: url("/assets/naslovna.jpg");
  border-radius: undefinedpx 0 0 0;
}
button {
  position: absolute;
  width: 422px;
  height: 61px;
  left: 509px;
  top: 421px;

  background: #eaca7a;
  border-radius: 10px;
  position: absolute;

  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
.margin-left {
  margin-left: 80px !important;
}
h3 {
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
