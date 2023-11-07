<template>
  <div>
    <div v-if="status == true" class="card" style="width: 500px;margin: 0 auto">
      <h4 class="card-header">Serie</h4>
      <img :src="serie.imagen" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{serie.nombre}}, {{serie.anyo}}</h5>
        <p class="card-text">Puntuación: {{serie.puntuacion}}</p>
        
        <router-link class="btn btn-primary" to="/">Volver</router-link>
        <router-link class="btn btn-danger" :to="'/personajes/'+serie.idSerie">Ver personajes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries'
const service = new ServiceSeries(); 
export default {
  name: "SerieComponent",
  data(){
    return{
      serie: null,
      status: false
    }
  },
  mounted(){
    service.getSerieId(this.$route.params.id).then(result => {
      this.serie = result;
      this.status = true;
    })
  }
}
</script>

<style>

</style>