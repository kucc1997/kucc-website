import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from '../../components/TeamCard/TeamCard'

const CommunityCo = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="subtitle1" color="text.secondary">
          KUCC Board 2020-21
        </Typography>
        <Typography variant="h4">Coordinators</Typography>
      </Box>
      <Grid container rowSpacing={4} columnSpacing={2}>
        {Array.from(Array(10)).map(() => (
          <Grid item md={4} sm={6} xs={12}>
            <TeamCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CommunityCo
