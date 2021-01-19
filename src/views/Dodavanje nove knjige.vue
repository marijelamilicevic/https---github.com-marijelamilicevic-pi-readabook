
<!--<template>
    <div>
        <b-container style="margin-top:2%">
        <b-form-input v-model="Upiši naslov" placeholder="Ime knjige"></b-form-input><br>
        <b-form-input v-model="Upiši autora" placeholder="Ime i prezime autora"></b-form-input><br>
        <b-form-input v-model="Odaberi žanr" placeholder="Odabir"></b-form-input><br>
	    <b-form-input v-model="Web stranica nakladnika" placeholder="Ime nakladnika"></b-form-input><br>
	    <b-form-input v-model="Upiši nakladnika" placeholder="Link na stranicu nakladnika"></b-form-input><br>
	    <b-form-input v-model="Poveznica za čitanje" placeholder="Link na online stranicu za čitanje"></b-form-input><br>
        <b-form-textarea id="textarea" v-model="opis" placeholder="Unesite opis filma"></b-form-textarea>

        <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <b-list-group>
            <b-button @click="dodajNovuknjigu()" variant="light">Spremi knjigu</b-button>
            <b-list-group-item style="margin:2%;" v-for="knjige in knjige" v-bind:key="knjiga.id">

                <span style="display: inline-block; width:30%; border-right: 1px solid rgba(0, 0, 0, .125);">

                    <p>Knjiga: {{ knjiga.ime}}</p><br>
                    <p>Autor: {{knjiga.autor}}</p><br>
                    <p>Žanr: {{knjiga.zanr}}</p><br>
                    <p>Nakladnik: {{knjiga.nakladnik}}</p>
		            <p>Web nakladnika: {{knjiga.webnakladnika}}</p>
		            <p>Poveznica: {{knjiga.poveznica}}</p>
 
		<b-button @click="Dodaj više podataka(knjiga.id)" variant="danger">Dodaj više podataka</b-button>

 		<b-list-group-item style="margin:2%;" v-for="knjige in knjige" v-bind:key="knjiga.id">
		<span style="display: inline-block; width:30%; border-right: 1px solid rgba(0, 0, 0, .125);">

		    <p>Naslovnica: {{knjiga.naslovnica}}</p><br>
	        <p>Broj stranica: {{knjiga.brojstranica}}</p><br>
		    <p>Jezik na kojem je knjiga pisana: {{knjiga.jezik}}</p><br>
		    <p>Godina izdanja: {{knjiga.godina}}</p><br>
		    <p>Opis: {{knjiga.opis}}</p><br>
                   
		<b-button @click="Odustani(knjiga.id)" variant="danger">Obriši knjigu</b-button>
               
                <span style="padding-left: 2%; display: inline-block; width: 70%;">

                    <div style="overflow-y: scroll; height: 170px;">
                        <b-list-group-item v-for="knjga in knjiga.komentari" v-bind:key="k.id">
                        </b-list-group-item>
                        </div>

                        <b-form-textarea
                        v-model="knjiga.noviKomentar"
                        style="margin-bottom: 1.5%;"></b-form-textarea>
                    <b-button @click="objaviKomentar(knjiga.noviKomentar, knjiga.id)" variant="success">Komentiraj</b-button>
            
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
//BAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
export default {
    name: 'DodavanjeNoveKnjige',
    data() {
        return {
            naslov: '',
            autor: '',
            zanr: '',
            nakladnik:'',
	        webnakladnika: '',
	        poveznicazacitanja: '',
	        naslovnica: '',
	        brstranica: '',
	        jezik: '',
	        godina: '',
	        opis: '',
            knjige: [],
            komentari: [],
        }
},
methods: {
    dodajNovuknjigu () {
        db.collection("knjige").add({
        naslov: this.naslov,
        autor: this.autor,
	    zanr: this.zanr,
	    nakladnik: this.nakladnik,
	    webnakladnika: this.webnakladnika,
	    poveznicazacitanje: this.poveznicazacitanje,
	    naslovnica: this.naslovnica,
	    brstranica: this.brstranica,
	    jezik: this.jezik, 
	    godina: this.godina,
	    opis: this.opis,
        });
        this.formReset();
    },
    async dohvatiKnjige () {
        this.dohvatiKomentare();
        let podaci = await db.collection('knjige').get();
        let knjige = [];
        var self = this;
        console.log('podaci: ', podaci);
        podaci.forEach(doc => {
            let p = doc.data();
            console.log('podaci: ', p);
            console.log('p: ', p);
            p.id = doc.id;
            p.komentari = [];
            self.komentari.forEach(function (k){
                console.log('k: ', k);
                if (k.komKnjigaId === p.id) {
                    p.komentari.push(k.text);
                }
            });
            p.noviKomentar = '';
            filmovi.push(p);
        });
        this.knjige = knjige;
        console.log('Knjige: ', this.knjige);
    },
    async dohvatiKomentare () {
      let podaci = await db.collection('komentari').get();
      let kom = [];
      podaci.forEach(doc => {
          let p = doc.data();
          p.id = doc.id;
          kom.push(p);
      });
      this.komentari = kom;
    },
    spremiKomentar (k, fId) {
        db.collection("komentari").add({
            text: k,
            komKnjigaId: kId
        });
        k = '';
        this.dohvatiKnjige();
    }
}}
</script>
<style>

#textarea {
    margin-top: 5%;
    margin-bottom: 5%;
}
.container {
    margin:10% auto;
    border-style:none;
    border-radius: 20px;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-right: 20px;
    padding-left: 20px;
    background-color:cornsilk;
}
.list-group-item{
    border-top-width: 1px !important;
}
-->