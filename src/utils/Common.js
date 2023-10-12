import { useData } from "../context/DataContext";

export const Common = (id) => {
  const { liked, watchLater, history } = useData()

  const isLiked = liked.find(vid => vid._id === id)
  const isInWatchLater = watchLater.find(vid => vid._id === id)
  const isInHistory = history.find(vid => vid._id === id)

  return { isLiked, isInWatchLater, isInHistory }
}