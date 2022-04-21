import { useData } from "../context/DataContext";

export const Common = (id) => {
  const { liked, watchLater } = useData()

  const isLiked = liked.find(vid => vid._id === id)
  const isInWatchLater = watchLater.find(vid => vid._id === id)

  return { isLiked, isInWatchLater }
}