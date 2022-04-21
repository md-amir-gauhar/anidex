import { useData } from "../context/DataContext";

export const Common = (id) => {
  const { liked } = useData()

  const isLiked = liked.find(vid => vid._id === id)

  return { isLiked }
}