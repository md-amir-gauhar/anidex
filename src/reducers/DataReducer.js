const initialState = {
  videos: [],
  categories: [],
  sortByCategory: "",
  liked: [],
  history: [],
  watchLater: []
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL_VIDEOS":
      return {
        ...state,
        videos: payload
      }
    case "INITIAL_CATEGORIES":
      return {
        ...state,
        categories: payload
      }
    case "SORT_BY_CATEGORY":
      return {
        ...state,
        sortByCategory: payload
      }
    case "LIKED_VIDEOS":
      return {
        ...state,
        liked: payload
      }
    case "WATCH_LATER":
      return {
        ...state,
        watchLater: payload,
      }
    case "HISTORY":
      return {
        ...state,
        history: payload
      }
    default:
      return state
  }
}

export { initialState, reducer }