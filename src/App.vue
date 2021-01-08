<template>
  <div id="app">
    <div id="nav">
      <div class="d-grid gap-2 col-6 mx-auto"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { firebase } from "/@firebase";

firebase.auth().onAuthStateChanged((user) => {
  //umjesto funkcije
  if (user) {
    //ako postoji, onda je korisnik ulogiran
    // User is signed in.
    console.log("***", user.email);
  } else {
    // ako ne postoji, korisnik ne postoji i nema ga
    // User is not signed in.
    console.log("***No user");
  }
});

// treba dodati te buttone i na glavni pregled tj. povezati da se kad se ulogira ode na glavni pregled
