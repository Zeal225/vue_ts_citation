import http from './http-common'

class CitationsDataService {
    getAll()
    {
        return http.get("/citations")
    }

    getDayCitation(){
        let id = Math.floor(Math.random() * 20) + 1;
        console.log(id)
        return http.get("/citations/"+id)
    }
}

export default new CitationsDataService()