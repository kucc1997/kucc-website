import React, { useState } from 'react'
import { Button, Container, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Send } from '@mui/icons-material'

const ContactForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
      fullName === '' && setNameError(true)

      email === '' && setEmailError(true)

      phone === '' && setPhoneError(true)

      message === '' && setMessageError(true)
  }
  return (
    <Container sx={{ py: 6 }}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              variant="standard"
              fullWidth
              required
              error={nameError}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="standard"
              required
              error={emailError}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              onChange={(e) => setPhone(e.target.value)}
              label="Phone"
              variant="standard"
              required
              error={phoneError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="standard"
              required
              error={messageError}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="submit" variant="contained" color="btn" size="large" endIcon={<Send />}>
            Send
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default ContactForm
