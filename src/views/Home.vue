<template>
  <div class="home">
    <div>
      <h1>Read a book</h1>
      <div>
        <div :style="image"></div>
        <div class="tekst">
          <router-link to="/Postojeći korisnik"
            ><button class="btn btn primary">
              <strong>Postojeći korisnik</strong>
            </button></router-link
          >
          <router-link to="/Novi korisnik"
            ><button class="btn btn primary">
              <strong>Novi korisnik</strong>
            </button></router-link
          >
          > >
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
  width: 1494px;
  height: 1021px;
  background-color: gray;
  background-attachment: fixed;
  background-image: url("/assets/naslovna.jpg");
  border-radius: undefinedpx 0 0 0;
}
.image {
  position: absolute;
  width: 1494px;
  height: 1021px;
  left: calc(50% - 1494px / 2 - 27px);
  top: calc(50% - 1021px / 2 + 8.81px);
  background: url("/assets/naslovna.jpg");
  filter: blur(8px);
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
h1 {
  position: absolute;
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