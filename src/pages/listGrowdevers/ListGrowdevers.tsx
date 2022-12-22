import { useAppDispatch, useAppSelector } from '../../store/modules/hooks'
import {
	getAllGrowdevers,
	getOneGrowdever,
	addGrowdever,
	editGrowdever,
	deleteGrowdever,
	Growdever
} from '../../store/modules/growdeverSlice'

import { useEffect, useState } from 'react'
import React from 'react'

const ListGrowdevers: React.FC = () => {
	const dispatch = useAppDispatch()
	const data = useAppSelector((state) => state.growdeverSlice)

	const [nome, setNome] = useState('')
	const [skills, setSkills] = useState([''])

	useEffect(() => {
		dispatch(getAllGrowdevers())
	}, [dispatch])

	// function newGrow() {
	// 	const nome = prompt('') ?? ''
	// 	const skills = prompt('') ?? ''
	// 	const newGrowdever: Growdever = {
	// 		nome,
	// 		skills: [skills]
	// 	}
	// 	console.log(data)

	// 	dispatch(addGrowdever(newGrowdever))
	// }

	function newGrow() {
		const newGrowdever: Growdever = {
			nome,
			skills: [...skills]
		}

		dispatch(addGrowdever(newGrowdever))
	}

	return (
		<>
			<div>
				<h1>Lista de growdevers</h1>

				<input
					type='text'
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				></input>
				<input
					type='text'
					value={skills}
					onChange={(e) => setSkills([e.target.value])}
				></input>

				<button onClick={() => newGrow()}>Adicionar</button>

				<table border={1} width='100%'>
					<thead>
						<tr>
							<th># ID</th>
							<th>Nome</th>
							<th>Skills</th>
						</tr>
					</thead>
					{/* <tbody>
						{data.map((m) => (
							<h1>{m}</h1>
						))}
					</tbody> */}
					<tbody>
						{data &&
							data.map((growdever) => (
								<tr key={growdever.id}>
									<td>{growdever.id}</td>
									<td>{growdever.nome}</td>
									<td>{growdever.skills}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListGrowdevers
