const initialState = {
  news: [],
  isLoading: false
}

const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_NEWS':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_ALL_NEWS':
      return {
        ...state,
        news: action.payload,
        isLoading: false
      }
    case 'FETCH_ONE_NEWS':
      return {
        ...state,
        news: action.payload,
        isLoading: false
      }
  
    default:
      return state
  }
}

export default newsReducers;