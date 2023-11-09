export default {

    GET_LOADED_LOGO(state){
        return state.isLoadedLogo
    },
    GET_LOADED_HEADER(state){
        return state.isLoadedHeader
    },
    GET_LOADED_CONTENT(state){
        return state.isLoadedContent
    },
    GET_FIRST_ROUTE(state){
        return state.isFirstRoute
    },
    GET_SHOW_CLEANER(state){
        return state.isShowCleaner
    },
    GET_ERRORS(state){
        return state.errors
    },
    GET_ERRORS_COUNT(state){
        return state.errorCount
    },
    GET_SHOW_POSTER(state){
        return state.isShowPoster
    },
}