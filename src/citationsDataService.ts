import http from './http-common'

class CitationsDataService {
    getAll()
    {
        return http.get("/citations")
    }

    getDayCitation(){
        let id = Math.floor(Math.random() * 200) + 1;
        return http.get("/citations/"+id)
    }

    searchCitations(text: string){
        return  http.get('/citations?content='+text)
    }
}

export default new CitationsDataService()