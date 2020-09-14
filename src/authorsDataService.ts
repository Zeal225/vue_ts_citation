import http from './http-common'

class AuthorsDataService {
    getAll(){
        return http.get('/authors')
    }
    getAuthorCitation(id: number){
        return http.get("/authors/"+id)
    }
}

export default new AuthorsDataService()