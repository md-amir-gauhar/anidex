import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, reducer } from '../reducers/DataReducer'

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    (async () => {
      try {
        const { data: videos } = await axios.get('/api/videos')
        dispatch({
          type: "INITIAL_VIDEOS",
          payload: [...videos.videos]
        })

        const { data: categories } = await axios.get('/api/categories')
        dispatch({
          type: "INITIAL_CATEGORIES",
          payload: categories.categories
        })

        const { data: likes } = await axios.get('/api/user/likes')
        console.log(likes)
        dispatch({
          type: "LIKED_VIDEOS",
          payload: likes.likes
        })

      } catch (err) {
        console.error(err.message)
      }
    })()
  }, [])

  const value = {
    videos: state.videos,
    categories: state.categories,
    sortByCategory: state.sortByCategory,
    liked: state.liked,
    dispatch
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext)

export { useData, DataProvider }