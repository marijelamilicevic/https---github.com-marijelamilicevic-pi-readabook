<template>
  <div class="home">
    <div>
      <h1>Read a book</h1>
        <div :style="image"></div>      <div>
        <div class="text">
          <router-link to="/Postojeći korisnik"
            ><button class="btn btn primary">
              <strong>Postojeći korisnik</strong>
            </button></router-link
          >
          <div class="divider" />
          <router-link to="/Novi korisnik"
            ><button class="btn btn primary">
              <strong>Novi korisnik</strong>
            </button></router-link
          >
          <div class="divider" />
          <router-link to="/Glavni pregled"
            ><button class="btn btn primary">
              <strong>Baza knjiga </strong>
            </button></router-link
          >
        </div>
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
.home {
  width: 1518px;
  height: 750px;
  background-image: url();
  background-color: peru;
  background-attachment: fixed;
  border-radius: undefinedpx 0 0 0;
}
button {
  position: absolute;
  width: 422px;
  height: 61px;
  left: 560px;
  top: 421px;
  background: #eaca7a;
  border-radius: 10px;
  position: relative;
  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
.divider {
  width: 20px;
  height: auto;
  display: inline-block;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
h1 {
  position: absolute;
  width: 870px;
  height: 174px;
  left: 562px;
  top: 42px;
  font-family: Great Vibes;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 225px;
  text-align: center;
  color: #eaca7a;
}
</style>