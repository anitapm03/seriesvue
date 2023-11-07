import Global from './../Global';
import axios from 'axios';

export default class ServiceCoches {

    getSeries(){
        return new Promise(function(resolve){

            var request = "api/series";
            var url = Global.urlSeries + request;

            var series = [];

            axios.get(url).then(response => {
                series = response.data;
                resolve(series);
            })
        })
    }

    getSerieId(id){
        return new Promise(function(resolve){

            var request = "api/series/" + id;
            var url = Global.urlSeries + request;

            var serie = {};

            axios.get(url).then(response =>{
                serie = response.data;
                resolve(serie);
            })
        })
    }

    getPersonajesSerie(id){
        return new Promise(function(resolve){
            var request = "api/series/personajesserie/" + id;
            var url = Global.urlSeries + request;

            var personajes = [];

            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })
        })
    }

    insertPersonaje(personaje){
        return new Promise(function(resolve){

            var request = "api/personajes";
            var url = Global.urlSeries + request;

            axios.post(url, personaje).then(response => {
                resolve(response);
            })
        })
    }

}