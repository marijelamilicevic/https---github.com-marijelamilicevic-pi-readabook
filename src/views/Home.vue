<template>
  <div class="home">
    <div>
      <h1>Read a book</h1>
        <div class="button">
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

.home {
  width: 1518px;
  height: 750px;
  background-color: rgb(219, 139, 19);
  background-attachment: fixed; 
}
button {
    margin: 4px;
    width: 40%;
    border-radius: 20px;
    padding: 1% 5%;
    background-color:rgb(231, 180, 69);
    font-size: 130%;
    margin: 5%;
    color: black;
    align-content: center;
}
.divider {
  width: 150px;
  display: inline-block;
}
button:hover {
  box-shadow: 9px 9px 7px black;
}
h1 {
  text-align: center;
  font-family: Great Vibes;
  font-size: 100px;
  color: #eaca7a;
}
</style>