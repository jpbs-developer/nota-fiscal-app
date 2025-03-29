import type { User } from '../../../models/User'
import api from '../../../services/api'

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
  const response = await api.post(`/auth/signup`, payload)
  return response.data
}

export async function login(payload: LoginPayload) {
  const response = await api.post<{ token: string; user: User }>(`/auth/login`, payload)
  return response.data
}
