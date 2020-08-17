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
            console.log(themeArray)
            return themeArray
        })).catch( (error => {
            console.log(error)
        }))
    }
}
export default new ThemeDataService();