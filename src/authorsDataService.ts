import http from './http-common'

class AuthorsDataService {
    getAll(){
        return http.get('/authors')
    }
}

export default new AuthorsDataService()