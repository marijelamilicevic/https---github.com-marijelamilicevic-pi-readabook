<template>
  <div class="home">
    <div>
      <h1>Read a book</h1>
        <div class="text">
          <router-link to="/Postojeći korisnik"
            ><button class="btn btn primary">
              <strong>Postojeći korisnik</strong>
            </button></router-link>
          <div class="divider" />
          <router-link to="/Novi korisnik"
            ><button class="btn btn primary">
              <strong>Novi korisnik</strong>
            </button></router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>
 
<style scoped>

.Home {
  background-color: brown;
}
button {
  position: relative;
  background: #eaca7a;
  border-radius: 10px;
  position: relative;
  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
.divider {
  width: 140px;
  height: auto;
  display: inline-block;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
h1 {
  position: center;
  font-family: Great Vibes;
  font-size: 100px;
  color: #eaca7a;
}
</style>