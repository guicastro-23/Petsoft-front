import axios from "axios"

const servicosApi = axios.create({baseURL: "http://localhost:8000/servicos"})

function getServicos() {
   const response = servicosApi.get('/')

   return response.data
}

export {
    getServicos
}