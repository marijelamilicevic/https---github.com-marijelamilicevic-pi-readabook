<template>
  <div class="home">
    <div>
      <div>
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
          <router-link to="Glavnipregled"
            ><button class="btn btn primary">
              <strong>Glavni pregled</strong>
            </button></router-link
          >
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
};
</script>
 
<style scoped>
.home {
  font-family: "Times New Roman", "Arial";
}
button {
  margin: 8%;
  font-size: 30px;
  border: none;
  border-radius: 20px;
  padding: 1.5% 6%;
  background-color: rgba(234, 202, 122, 1);
  color: black;
}
button:hover {
  box-shadow: black;
}
.tekst {
  width: 70%;
  margin: auto;
}
.tekst h1 {
  width: 870px;
  height: 174px;
  left: 562px;
  top: 42px;

  font-family: Great Vibes;
  font-style: normal;
  font-weight: normal;
  font-size: 180px;
  line-height: 225px;
  text-align: center;

  color: #eaca7a;
}
.tekst h4 {
  line-height: 150%;
}
@media (max-width: 600px) {
  button {
    margin: 4px;
    width: 40%;
    border-radius: 20px;
    padding: 1% 5%;
    background-color: rgb(197, 160, 165);
    font-size: 150%;
    margin: 5%;
  }
  button:hover {
    box-shadow: 9px 9px 7px gray;
  }
  .tekst {
    width: 80%;
    margin: auto;
  }
  .tekst h1 {
    margin-bottom: 5%;
    font-size: 35px;
    margin-top: 10%;
  }
  .tekst h4 {
    line-height: 150%;
    font-size: 130%;
  }

  .row {
    margin: auto;
  }
}
</style>