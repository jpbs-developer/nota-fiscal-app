export type User = {
  fullName: string
  email: string
  password: string
  company: string
}

export type Client = {
  id: string
  fullName: string
  type: 'FISIC' | 'JURIDIC'
  document: string
  email: string
  createdAt: string
}
