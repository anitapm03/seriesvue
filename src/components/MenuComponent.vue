<template>
  <div>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        
        <div class="container-fluid">
           
          <router-link class="navbar-brand" to="/">
          <img src="./../assets/logo.png" width="30" height="24">
            Home
          </router-link>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div class="navbar-nav">
              <router-link class="nav-link active" to="/crear">Crear Personaje</router-link>
              <router-link class="nav-link" to="/update">Modificar Personaje</router-link>
            </div>

              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Series
              </a>
              <ul class="dropdown-menu" >
                
                <li v-for="serie in series" :key="serie">
                  <router-link class="dropdown-item" :to="'/serie/'+serie.idSerie">
                  {{serie.nombre}}</router-link>
                </li> 
                
              </ul>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
  name: "MenuComponent",
  data(){
    return{
      series:[]
    }
  },
  mounted(){
    service.getSeries().then(result => {
      this.series = result;
      console.log(this.series)
    })
  }
}
</script>

<style>

</style>