import React from 'react'
import { Header as NBHeader, Body, Title } from 'native-base'

const Header = () => {
	return (
		<NBHeader hasSegment style={{ backgroundColor: '#5859f2'}}>
			<Body >
				<Title style={{ color: '#ffffff' }}>To - Do List</Title>
			</Body>
		</NBHeader>
	)
}

export default Header