<template>
  <div>
    <h1>Crear personaje</h1>

    <form v-on:submit.prevent="crearPersonaje()" style="width: 500px; margin: 0 auto">
      <label>ID</label>
      <input type="number" class="form form-control" v-model="personaje.idPersonaje" />
      <br/>
      <label>Nombre</label>
      <input type="text" class="form form-control" v-model="personaje.nombre" />
      <br/>
      <label>Imagen</label>
      <input type="text" class="form form-control" v-model="personaje.imagen" />
      <br/>

      <label>Serie</label>
      <select class="form form-control" v-model="personaje.idSerie">
        <option v-for="s in series" :key="s" :value="s.idSerie" >{{s.nombre}}</option>
      </select>
      <br/>
      <button class="btn btn-outline-info">Crear!</button>

    </form>

  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();
export default {
    name: "CreatePersonaje",
    data() {
      return{
        personaje:{
          idPersonaje: 0,
          nombre: "",
          imagen: "",
          idSerie: ""
        },
        series: []
      }
    },
    mounted(){
      service.getSeries().then(result => {
        this.series = result;
        //console.log(this.series)
      })
      
    },
    methods:{
      crearPersonaje(){
        console.log(this.personaje);
        service.insertPersonaje(this.personaje).then(result => {
        console.log(result)
        this.$router.push("/serie/"+this.personaje.idSerie);
        })
      }
    }
}
</script>

<style>
/* {
  "idPersonaje": 0,
  "nombre": "string",
  "imagen": "string",
  "idSerie": 0
} */
</style>