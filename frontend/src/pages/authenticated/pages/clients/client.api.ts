import api from '../../../../services/api'

export type ClientPayload = {
  fullName: string
  type: 'FISIC' | 'JURIDIC'
  document: string
  email: string
  phone: string
}

export async function createClient(client: ClientPayload) {
  const response = await api.post('/clients', client)
  return response.data
}

export async function retriveClients() {
  const response = await api.get('/clients')
  return response.data.clients
}
