import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import RegisterForm from '../../components/Register/RegisterForm'

const RegisterPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h1" fontSize="32px" fontWeight="bold">
        KUCC Member Registration
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item md={8}>
          <RegisterForm />
        </Grid>
        <Grid item md={4}>
          <p>Nice World</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default RegisterPage
