const setAuthData = (data) => {
  localStorage.setItem('auth', data)
}

const getAuthData = () => {
  return localStorage.getItem('auth')
}

const removeAuthData = () => {
  localStorage.removeItem('auth')
}


export { getAuthData, setAuthData, removeAuthData }