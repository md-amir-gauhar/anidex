const initialState = {
  videos: [],
  categories: []
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
    default:
      return state
  }
}

export { initialState, reducer }