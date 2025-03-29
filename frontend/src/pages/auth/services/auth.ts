import axios from 'axios'

const API_URL = 'http://localhost:3333'

export type SignupPayload = {
  fullName: string
  email: string
  password: string
  company: string
}

export async function signup(payload: SignupPayload) {
  const response = await axios.post(`${API_URL}/auth/signup`, payload)
  return response.data
}
