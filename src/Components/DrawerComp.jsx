import React, { useState } from 'react'
import { Drawer, IconButton, List } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Title from './Title'

const DrawerComp = () => {
	const [openDrawer, setopenDrawer] = useState(false)

	const MENU = [
		{
			id: 1,
			title: 'Home',
			link: '/',
		},
		{
			id: 2,
			title: 'About',
			link: '/about',
		},
		{
			id: 3,
			title: 'Cars',
			link: '/carros',
		},
	]

	return (
		<React.Fragment>
			<Drawer
				open={openDrawer}
				onClose={() => setopenDrawer(false)}
				PaperProps={{
					sx: {
						backgroundColor: 'pink',
					},
				}}>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						mx: 'auto',
						width: 200,
						gap: 5,
					}}>
					<Title text="Alucar" />
					<ul>
						{MENU.map((item) => {
							const { id, title, link } = item
							return (
								<li key={id}>
									<a href={link}>{title}</a>
								</li>
							)
						})}
					</ul>
				</List>
			</Drawer>
			<IconButton onClick={() => setopenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</React.Fragment>
	)
}
export default DrawerComp
