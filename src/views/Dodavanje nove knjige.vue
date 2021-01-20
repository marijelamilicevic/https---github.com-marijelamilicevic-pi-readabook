<!-- ne kužim zašto mi ovo ne želi prikazat -->

<template>
<div class="Dodavanje nove knjige">
     <h1>Želiš dodati novu knjigu u našu bazu? Ovdje to možeš!</h1>
      <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
        <div class="form-group">
         <label for="NaslovKnjige">Naslov knjige</label>
              <input
                type="text"
                v-model="naslov"
                class="form-control"
                id="NaslovKnjige"
                aria-describedby="naslovknjigeHelp"
                placeholder="Unesi naslov knjige"
              />
        </div>
        <div class="form-group">
         <label for="AutorKnjige">Autor</label>
              <input
                type="text"
                v-model="autor"
                class="form-control"
                id="AutorKnjige"
                aria-describedby="autorHelp"
                placeholder="Unesi ime i prezime autora knjige"
              />
        </div>      
        <div class="form-group">
         <label for="Zanr">Žanr</label>
              <input
                type="text"
                v-model="zanr"
                class="form-control"
                id="ZanrKnjige"
                aria-describedby="zanrHelp"
                placeholder="Unesi žanr knjige"
              />
        </div>      
        <div class="form-group">
         <label for="WebNakladnika">Web stranica nakladnika</label>
              <input
                type="text"
                v-model="webnakladnika"
                class="form-control"
                id="WebNakladnika"
                aria-describedby="webnakladnikaHelp"
                placeholder="Unesi web stranicu nakladnika"
              />
        </div>      
        <div class="form-group">
         <label for="Nakladnik">Naslov knjige</label>
              <input
                type="text"
                v-model="nakladnik"
                class="form-control"
                id="Nakladnik"
                aria-describedby="nakladnikHelp"
                placeholder="Unesi nakladnika"
              />
        </div>      
        <div class="form-group">
         <label for="Opis">Opis knjige</label>
              <input
                type="text"
                v-model="opis"
                class="form-control"
                id="Opis"
                aria-describedby="opisHelp"
                placeholder="Unesi kratki opis / sažetak knjige"
              />     
        </div>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Dodavanje nove knjige", 
};         
</script>

<style>
button {
  position: absolute;
  width: 244px;
  height: 51px;
  left: 66px;
  top: 927px;

  background: #eaca7a;
  border-radius: 10px;
  position: absolute;

  width: 279px;
  height: 48px;
  left: 580px;
  top: 427px;
}
h1 {
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