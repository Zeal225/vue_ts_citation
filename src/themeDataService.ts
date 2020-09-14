import http from './http-common'

class ThemeDataService {
    getAll(){
        return http.get('/themes')
    }
    homePageThemesList(){
        let themeArray: Array<object>;
        this.getAll().then( (response => {
            const theme =  response.data["hydra:member"]
            theme.forEach( (el: any, index: any) => {
                if (index < 20){
                    themeArray.push(el)
                }
            })
            return themeArray
        })).catch( (error => {
        }))
    }
    getThemeCitation(id: number){
        return http.get("/themes/"+id)
    }
}
export default new ThemeDataService();