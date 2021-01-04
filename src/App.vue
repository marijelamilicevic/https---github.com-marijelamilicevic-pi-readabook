<template>
  <div id="app">
    <div id="nav">
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">
          <router-link to="/prijava">Prijava</router-link>
          <!-- iskreno nemam pojma što ovdje radim jer ne znam kako napravit buttone bez navbara, al barem su se pojavili, moram još maknuti sad taj donji dio -->
        </button>
        <button class="btn btn-primary" type="button">
          <router-link to="/Registracija">Registracija</router-link>
        </button>
      </div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/prijava">Prijava</router-link>
      |
      <router-link to="/Registracija">Registracija</router-link>
      |
    </div>
    <router-view />
  </div>
</template>

<!-- treba srediti stranicu, obrisati onaj dio jer mi nemamo navbar na glavnoj stranici i dodati kao što smo u Figmi radili + nemam pojma šta mi ovo dva put tu radi, sredit ću -->

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
