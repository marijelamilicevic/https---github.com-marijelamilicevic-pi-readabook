<template>
  <div>
    {{ $route.params.naslov }}
{{knjiga}}

    <ul id="example-1">
  <li v-for="k in knjiga" :key="k.naslov">
    {{ k.naslov }} - {{k.autor}}
  </li>
</ul>
  </div>
</template>

<script>
import {firebase} from "@/firebase.js"

export default {
  name: "Rezultati",
  data: function() {
    return {
      knjiga:[]
      }
  },
 
  methods: {

    dohvati: function() {
   
      firebase.firestore().collection('knjiga').where("zanr", "==", this.$route.params.zanr).where("autor","==", this.$route.params.autor).where("naslov","==", this.$route.params.naslov)
        .get()
        .then(querySnapshot => {

          const documents = querySnapshot.docs.map(doc => doc.data())
          console.log(documents)
          this.knjiga = documents
        
        })
    }

  },
  mounted(){
    this.dohvati()

  }
  
};
</script>

<style scoped>

</style>
