import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const GetInTouch = () => {
  const clubRepresentatives = [
    {
      id: 1,
      name: 'Sagar Uprety',
      position: 'Club President',
      phoneNumber: '9802020202',
      email: 'sagar@gmail.com',
    },
    {
      id: 2,
      name: 'Ashutosh B. Rajan ',
      position: 'Club Vice President',
      phoneNumber: '9802020202',
      email: 'ashutosh@gmail.com',
    },
    {
      id: 3,
      name: 'Salina Koirala',
      position: 'General Secretary',
      phoneNumber: '9802020202',
      email: 'salinakoirala1@gmail.com',
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
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{ textAlign: 'center' }}
                key={representative.email}
              >
                <Typography variant="h6" pb={1}>
                  {representative.name}
                </Typography>
                <Typography variant="subtitle2" pb={1} color="text.secondary">
                  {representative.position}
                </Typography>
                <Typography variant="subtitle2" pb={1} color="text.secondary">
                  {representative.phoneNumber}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {representative.email}
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
