import { Navigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext'

const PrivateRoutes = ({ children }) => {
  const { isUser } = useAuth()

  return isUser ? children : <Navigate to="/login" />
}

export default PrivateRoutes