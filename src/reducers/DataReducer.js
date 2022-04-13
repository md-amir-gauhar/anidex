const initialState = {
  videos: [],
  categories: [],
  sortByCategory: ""
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
    default:
      return state
  }
}

export { initialState, reducer }