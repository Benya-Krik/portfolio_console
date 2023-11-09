export default {
    SET_LOADED_LOGO(state, value) {
        state.isLoadedLogo = value;
    },
    SET_LOADED_HEADER(state, value) {
    state.isLoadedHeader = value;
    },
    SET_LOADED_CONTENT(state, value) {
    state.isLoadedContent = value;
    },
    SET_FIRST_ROUTE(state, value){
    state.isFirstRoute = value
    },
    SET_SHOW_CLEANER(state, value){
    state.isShowCleaner = value
    },
    SET_ERRORS(state, value) {
        state.errors = value
    },
    SET_ERRORS_COUNT(state, value) {
        state.errorCount = value
    },
    SET_SHOW_POSTER(state, value) {
        state.isShowPoster = value
    }
}