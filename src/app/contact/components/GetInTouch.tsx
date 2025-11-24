import { Container, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const GetInTouch = () => {
  const clubRepresentatives = [
    {
      id: 1,
      name: 'Sakshi K.C.',
      position: 'President',
      phoneNumber: '9821948158',
    },
    {
      id: 2,
      name: 'Kiran Dahal',
      position: 'Vice President',
      phoneNumber: '9863008384',
    },
    {
      id: 3,
      name: 'Saksham Gyawali',
      position: 'General Secretary',
      phoneNumber: '9847025812',
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
