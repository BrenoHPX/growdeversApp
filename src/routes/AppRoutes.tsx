import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListGrowdevers from '../pages/listgrowdevers/ListGrowdevers'

export const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ListGrowdevers />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
