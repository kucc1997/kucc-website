import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactAddress from '../components/Contact/ContactAddress'

const ContactPage = () => {
  return (
    <Container sx={{py: 8}}>
        <Box textAlign='center' mb={6}>
            <Typography variant='h5'>Contact Us</Typography>
            <Typography variant='subtitle1' color='text.secondary'>Any question or remarks? Write to us.</Typography>
        </Box>
        <Grid sx={{background: 'text.light'}} container rowSpacing={4} columnSpacing={{xs:1, sm:2, md:3}}>
            <Grid item xs={12} md={5} sm={6} lg={4}>
                <ContactInfo />
            </Grid>
            <Grid item xs={12} md={7} sm={6} lg={8}>
                <ContactForm />
            </Grid>
            <Grid item xs={12} md={12} sm={12} >
                <ContactAddress />
            </Grid> 
        </Grid>
    </Container>
  )
}

export default ContactPage