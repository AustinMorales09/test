const intialState = {
    url: `https://newsapi.org/v2/everything?q=ai&apiKey=${process.env.REACT_APP_NEWS_KEY}`,
    article: ''
}

function rootReducer(state = intialState, action){
    switch(action.type){
        case 'UPDATE_URL':
            return {...state,
                url: action.url};
        case 'UPDATE_ARTICLE':
            return {...state,
                article: action.article
            }

        default: 
            return state;
    }
}

export default rootReducer;
