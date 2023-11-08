import axios from "axios"

const servicosApi = axios.create({baseURL: "http://localhost:8000/servicos"})

async function getServicos() {
   const response = await servicosApi.get('/')

   return response.data
}

export {
    getServicos
}