import http from './http-common'

class CitationsDataService {
    getAll()
    {
        return http.get("/citations")
    }

    getDayCitation(){
        let id = Math.floor(Math.random() * 20) + 1;
        return http.get("/citations/"+id)
    }
}

export default new CitationsDataService()