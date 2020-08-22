
const state = {
    showw: false
};

const mutations  = {
    showNavBarSearchMutation(state: any){
        state.navBarSearch = !state.navBarSearch;
    },
};

const actions = {
    showNavBarSearch(context: any){
        context.commit("showNavBarSearchMutation");
    }
};

const getters = {
    showNavBarSearch(state: any){
        return state.navBarSearch;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}