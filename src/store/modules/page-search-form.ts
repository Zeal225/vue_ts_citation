// @ts-ignore
import $ from "jquery";

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
    accordionAuthor(state :any, tagClassName: any){
        //accordion(){
        $('.accord').each(function (){
            // @ts-ignore
            const $this = $(this);
            $this.on('click', function (){
                console.log("ze")
                $('.accordion').each(function (){
                    // @ts-ignore
                    $(this).slideUp('slow');
                    $('.down').css('transform','rotate('+90+'deg)');

                    // $('.voir-plus').html('voir les citations de <span class="orange">winston churchill</span>');

                    $('.voir-plus').html('voir les citations de <span class="orange">winston churchill</span>');

                });
                const href = $this.attr('href');
                const lien = $('#' + href + "");
                if (lien.is(':visible')) {
                    lien.slideUp('slow');
                    $this.children('.down').css('transform','rotate('+90+'deg)');

                    // $this.children('.voir-plus').html('voir les citations de <span class="orange">winston churchill</span>');

                    $this.children('.voir-plus').html('voir les citations de <span class="orange">winston churchill</span>');

                }
                else{
                    lien.slideDown('slow');
                    $this.children('.down').css('transform','rotate('+270+'deg)');
                    // $this.children('.voir-plus').html('refermer');
                }
            });
        });
        //}
    }
};

const actions = {
    showAlphabetLetter(context: any){
        context.commit('showAlphabetLetterMutation');
    },
    showThemeWord(context: any){
        context.commit('showThemeWordMutation');
    },
    accordionAuthorMutation(context: any){
        context.commit('accordionAuthor')
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