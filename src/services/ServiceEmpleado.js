import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleado {

    login(){
        let request = "api/auth/login";
        let url = Global.urlApiEjemplos + request;
        return axios.post(url, {userName: "alumno", Password: "tajamar"}).then(response => {
            let token = response.data.response;
            localStorage.setItem("token", token);
            return token;
        });
    }

    getEmpleados(){
        let request = "api/alumnos/alumnostoken"
        let url = Global.urlApiEjemplos + request;
        return axios.get(url, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}}).then(response => {
            return response.data;
        });

    }

    cerrarSesion(){
        localStorage.removeItem("token");
    }

}