
const state = {
    alphabetLetter : false,
    themeWord: false,
};

const mutations  = {
    showAlphabetLetterMutation(state: any){
        state.alphabetLetter = !state.alphabetLetter;
        state.themeWord = false;
    },
    showThemeWordMutation(state: any){
        state.themeWord = !state.themeWord;
        state.alphabetLetter = false;
    },
};

const actions = {
    showAlphabetLetter(context: any){
        context.commit('showAlphabetLetterMutation');
    },
    showThemeWord(context: any){
        context.commit('showThemeWordMutation');
    }
};

const getters = {
    showAlphabetLetter(state: any){
        return state.alphabetLetter
    },
    showThemeWord(state: any){
        return state.themeWord
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}