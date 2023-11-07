<template>
  <div>
    <h1>Personajes</h1>

     <table v-if="status==true" class="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in personajes" :key="p">
            <td>{{p.nombre}}</td>
            <td>
              <img :src="p.imagen" style="width: 150px; heigth: 150px;">
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries'
const service = new ServiceSeries(); 
export default {
  name: "PersonajesComponent",
  data(){
    return{
      personajes: [],
      status: false
    }
  },
  mounted(){
    service.getPersonajesSerie(this.$route.params.id).then(result => {
      this.personajes = result;
      this.status = true;
    })
  }
}
</script>

<style>

</style>