<template>
  <div class="home">
    <div>
      <img src="@/assets/books.jpg" class="img-fluid">
      <h1>Read a book</h1>
      <h3>„Onaj tko ne voli čitati nije pronašao pravu knjigu za sebe.” – J.K. Rowling</h3>
        <div class="button">
          <router-link to="/Postojeći korisnik"
            ><button class="btn btn primary">
              <strong>Postojeći korisnik</strong>
            </button></router-link>
          <router-link to="/Novi korisnik"
            ><button class="btn btn primary">
              <strong>Novi korisnik</strong>
            </button></router-link>
        </div>
         <img src="@/assets/books2.jpg" class="img-fluid">
         <h8>Read a book 2021./2022.</h8>
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
  width: fit-content;
  height:fit-content;
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
  font-family: 'Times New Roman';
  font-size: 100px;
  color: black;
}
h3 {
  text-align: center;
  font-style: italic;
  font-family: 'Times New Roman';
  font-size: 20px;
  color: black;
}
h8 {
  text-align: center;
  font-style: italic;
  font-family: 'Times New Roman';
  font-size: 12px;
  color: black;
}
</style>