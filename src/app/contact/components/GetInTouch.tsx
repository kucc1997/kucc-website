import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const GetInTouch = () => {
  const clubRepresentatives = [
    {
      id: 1,
      name: 'Abhiyan Dhakal',
      position: 'President',
      phoneNumber: '9847382531',
    },
    {
      id: 2,
      name: 'Saroj Sigdel',
      position: 'Vice President',
      phoneNumber: '9762513456',
    },
    {
      id: 3,
      name: 'Mukul Aryal',
      position: 'General Secretary',
      phoneNumber: '9861367984',
    },
  ]
  return (
    <Container>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography variant="h5"> Get in touch with the club.</Typography>
      </Box>
      <Box>
        <Grid
          container
          rowSpacing={{ xs: 3, sm: 4, md: 4, lg: 2 }}
          sx={{
            pt: 4,
          }}
        >
          {clubRepresentatives.map((representative) => {
            return (
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }} key={representative.id}>
                <Typography variant="h6" pb={1}>
                  {representative.name}
                </Typography>
                <Typography variant="subtitle2" pb={1} color="text.secondary">
                  {representative.position}
                </Typography>
                <Typography variant="subtitle2" pb={1} color="text.secondary">
                  {representative.phoneNumber}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default GetInTouch
