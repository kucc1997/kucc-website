import React from 'react'
import { Container, Grid } from '@mui/material'
import RegisterForm from '../../components/Register/RegisterForm'
import RegisterInfo from '../../components/Register/RegisterInfo'

const RegisterPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item md={8}>
          <RegisterForm />
        </Grid>
        <Grid item md={4}>
          <RegisterInfo />
        </Grid>
      </Grid>
    </Container>
  )
}

export default RegisterPage
