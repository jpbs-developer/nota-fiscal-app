export type User = {
  fullName: string
  email: string
  password: string
  company: string
}

export type Client = {
  id: string
  name: string
  type: 'Pessoa Física' | 'Pessoa Jurídica'
  document: string
  email: string
  createdAt: string
}
