const setAuthData = (data) => {
  localStorage.setItem('auth', data)
}

const getAuthData = () => {
  return localStorage.getItem('auth')
}


export {getAuthData, setAuthData}