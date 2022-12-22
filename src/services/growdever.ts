import { api } from './index'

class GrowdeverDataService {
	async getAll() {
		return await api.get('/growdevers')
	}

	async getOne(codigo: string) {
		return await api.get(`/growdevers/${codigo}`)
	}

	async create(growdever: any) {
		console.log('asyn create')
		return await api.post('/growdever', {
			nome: growdever.nome,
			skills: growdever.skills
		})
	}

	async editOne(codigo: string) {
		return await api.put(`/growdever/${codigo}`)
	}

	async deleteOne(codigo: string) {
		return await api.delete(`/growdever/${codigo}`)
	}
}
const growdeverService = new GrowdeverDataService()

export { growdeverService }

// GET - /growdevers
// GET - /growdevers/:id - `/growdevers/${codigo}`
// POST - /growdever
// PUT - /growdever/:id
// DELETE - /growdever/:id
