<template>
  <div>
    <h1>Home Component</h1>
    <button class="btn btn-success" @click="getToken()">Login</button>
    <button  class="btn btn-primary" @click="getAlumnos()">Get Alumnos</button>
    <button class="btn btn-outline-danger" @click="cerrarSesion()">Cerrar Sesion</button>

    <!-- div -->
     <div v-if="token">
        <table class="table">
        <thead>
            <tr>
                <th>idAlumno</th>
                <th>Nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="alumno in alumnos" :key="alumno">
                <td>{{alumno.idAlumno}}</td>
                <td>{{alumno.nombre}}</td>
            </tr>
        </tbody>
    </table>
     </div>

    
  </div>
</template>

<script>
import ServiceEmpleado from "@/services/ServiceEmpleado";
const service = new ServiceEmpleado();

export default {

    data(){
        return {
            alumnos: [],
            token: null
        }
    },

    mounted(){
        
    },
    
    methods: {
        getAlumnos(){
            service.getEmpleados().then(response => {
                this.alumnos = response;
                
            });
        },

        getToken(){
            service.login().then(response => {
                console.log(response);
                this.evaluarToken()
                console.log("Sesión Iniciada 🟢",response)
            });
        },

        cerrarSesion(){
            service.cerrarSesion();
            this.evaluarToken()
            console.log("Sesion cerrada 🟥");
        },

        evaluarToken(){
            this.token = localStorage.getItem("token");
        }
    }

}
</script>

<style>

</style>