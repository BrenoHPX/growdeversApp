import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { growdeverService } from '../../services'

export const getAllGrowdevers = createAsyncThunk(
	'growdeveders/getAll',
	async () => {
		const resposta = await growdeverService.getAll()

		return resposta.data.data
	}
)

export const getOneGrowdever = createAsyncThunk(
	'growdevers/getOne',
	async (codigo: string) => {
		const resposta = await growdeverService.getOne(codigo)

		return resposta.data.data
	}
)

export const addGrowdever = createAsyncThunk<Growdever, Growdever>(
	'growdever/add',
	async (growdever) => {
		const resposta = await growdeverService.create(growdever)

		return resposta.data.data
	}
)

export const editGrowdever = createAsyncThunk(
	'growdevers/edit',
	async (codigo: string) => {
		const resposta = await growdeverService.editOne(codigo)

		return resposta.data.data
	}
)

export const deleteGrowdever = createAsyncThunk(
	'growdever/delete',
	async (codigo: string) => {
		const resposta = await growdeverService.deleteOne(codigo)

		return resposta.data.data
	}
)

export interface Growdever {
	id?: string
	nome: string
	skills?: string[]
}

const initialState: any[] = []

const growdeverSlice = createSlice({
	name: 'growdevers',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(addGrowdever.fulfilled, (state, action) => {
				return [...state, action.payload]
			})
			.addCase(getAllGrowdevers.fulfilled, (state, action) => {
				return action.payload
			})
			.addCase(deleteGrowdever.fulfilled, (state, action) => {
				return state.filter((f) => f.id !== action.payload)
			})
			.addCase(editGrowdever.fulfilled, (state, action) => {
				return state
					.find((f) => f.id === action.payload.id)
					.map((m: any) => (m.skills = action.payload.skills))
			})
	}
})

export default growdeverSlice.reducer

// server.put(
// 	'/growdever/:id',
// 	[middlewareVerificaId, middlewareVerificaSkills],
// 	(req: Request, res: Response) => {
// 		const { id } = req.params
// 		const { skills } = req.body

// 		const growdeverAlvo = growdevers.find((f) => f.id === id)

// 		growdeverAlvo!.skills = [...(growdeverAlvo!.skills ?? []), ...skills]

// 		res.status(200).json({
// 			sucesso: true,
// 			data: growdeverAlvo
// 		} as RespostaPadrao)
// 	}
// )

// editarRecado:(state, action)=>{
//     state.recadosList.map(item => {
//         if(item.id === action.payload.id){
//             item.titulo = action.payload.titulo
//             item.descricao = action.payload.descricao
//         }return('')
//     })
