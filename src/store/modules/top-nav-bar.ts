
const state = {
    navBarSearch: false,
    navBarMenu: false,
    navBarConnexion: false,
    hideAll: false
};

const mutations  = {
    showNavBarSearchMutation(state: any){
        state.navBarSearch = !state.navBarSearch;
    },
    showNavBarMenuMutation(state: any){
        state.navBarMenu = !state.navBarMenu;
    },
    showNavBarConnexionMutation(state: any){
        state.navBarConnexion = !state.navBarConnexion;
    },
    showNavBarHideAllMutation(state: any){
        state.navBarSearch = false;
        state.navBarMenu = false;
        state.navBarConnexion = false;
    },
    hideModal(state :any, tagClassName: any){
        let elm = document.getElementById('app');
        // @ts-ignore
        elm.addEventListener('click', function (event) {
            // @ts-ignore
            if (!event.target.closest(tagClassName)){
                state.navBarSearch = false;
                state.navBarMenu = false;
                state.navBarConnexion = false;
            }
        })
    }
};

const actions = {
    showNavBarSearch(context: any){
        context.commit("showNavBarSearchMutation");
    },
    showNavBarMenu(context: any){
        context.commit("showNavBarMenuMutation");
    },
    showNavBarConnexion(context: any){
        context.commit("showNavBarConnexionMutation");
    },
};

const getters = {
    showNavBarSearch(state: any){
        return state.navBarSearch;
    },
    showNavBarMenu(state: any){
        return state.navBarMenu;
    },
    showNavBarConnexion(state: any){
        return state.navBarConnexion;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}