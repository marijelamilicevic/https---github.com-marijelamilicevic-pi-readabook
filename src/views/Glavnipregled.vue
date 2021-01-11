<template>
  <div class="glavni pregled">
    <div>
      <h1>Read a book</h1>
      <div></div>
      <h3>Dobrodošao korisniče!</h3>
      <div>
        <div :style="image"></div>
        <div class="tekst">
          <router-link to="/Pretraga baze knjiga"
            ><button class="btn btn primary">
              <strong>Pretraga baze knjiga</strong>
            </button></router-link
          >
          <router-link to="/Dodavanje nove knjige"
            ><button class="btn btn primary">
              <strong>Dodaj novu knjigu</strong>
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  position: right;
  width: 870px;
  height: 174px;

  font-family: Great Vibes;
  font-size: 50px;
  line-height: 225px;
  text-align: right;

  color: #eaca7a;
}
h3 {
  position: left;
  width: 870px;
  height: 174px;
  left: 562px;
  top: 42px;

  font-family: Great Vibes;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 225px;
  text-align: center;

  color: #eaca7a;
}
button {
  position: absolute;
  width: 244px;
  height: 51px;
  left: 66px;
  top: 927px;

  background: #eaca7a;
  border-radius: 10px;

  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
button {
  position: absolute;
  width: 244px;
  height: 51px;
  left: 66px;
  top: 927px;

  background: #eaca7a;
  border-radius: 10px;

  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
</style>
