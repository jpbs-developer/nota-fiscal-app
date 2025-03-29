import axios from 'axios'
import type { User } from '../../../models/User'

const API_URL = 'http://localhost:3333'

export type SignupPayload = {
  fullName: string
  email: string
  password: string
  company: string
}

export type LoginPayload = {
  email: string
  password: string
}

export async function signup(payload: SignupPayload) {
  const response = await axios.post(`${API_URL}/auth/signup`, payload)
  return response.data
}

export async function login(payload: LoginPayload) {
  const response = await axios.post<{ token: string; user: User }>(`${API_URL}/auth/login`, payload)
  return response.data
}
