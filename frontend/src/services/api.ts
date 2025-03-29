import axios from 'axios'
import router from '../router'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) router.push('/login')
    return Promise.reject(error)
  }
)

export default api
