import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from '../../components/TeamCard/TeamCard'
import { Helmet } from 'react-helmet'

const advisorsList = [
	{
		name: 'Assoc. Prof. Dr. Bal Krishna Bal',
		position: 'Head of Department, DoCSE',
		image: '/people/Bal_Krishna_Bal.webp',
		linkedin: 'https://www.linkedin.com/in/bal-krishna-bal-4bb71a19/',
		mail: 'bal@ku.edu.np',
	},
	{
		name: 'Asst. Prof. Pankaj Raj Dawadi',
		position: 'Assistant Professor, DoCSE',
		image: '/people/Pankaj_Raj_Dawadi.webp',
		linkedin: 'https://www.linkedin.com/in/pankaj-dawadi-83467b7a/',
		mail: 'pdawadi@ku.edu.np',
	},
]

const AdvBoard = () => {
	return (
		<>
			<Helmet>
				<title> Advisory Board - KUCC</title>
				<meta
					name="description"
					content="Advisory Board of Kathmandu University consists of Associate Professor Bal Krishna Bal, Head of Department of DoCSE and Assistant Professor Pankaj Raj Dawadi, DoCSE"
				/>
			</Helmet>
			<Container sx={{ py: 8 }}>
				<Box textAlign="center" mb={3}>
					<Typography variant="subtitle1" color="text.secondary">
						KUCC Board 2023-24
					</Typography>
					<Typography variant="h4">Advisors</Typography>
				</Box>
				<Grid container rowSpacing={4} columnSpacing={2}>
					{advisorsList.map((advisor) => (
						<Grid item md={4} sm={6} xs={12}>
							<TeamCard {...advisor} />
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	)
}

export default AdvBoard
