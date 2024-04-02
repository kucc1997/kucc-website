import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
// import ContactForm from '../components/Contact/ContactForm'
// import ContactInfo from '../components/Contact/ContactInfo'
import GetInTouch from '../components/Contact/GetInTouch'
import { Helmet } from 'react-helmet'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - KUCC</title>
      </Helmet>
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary">
            Any question or remarks? Write to us.
          </Typography> */}
        </Box>
        <Grid sx={{ background: 'text.light' }} container rowSpacing={4} columnSpacing={{ xs: 1 }}>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Grid item xs={12} sm={6} lg={8}>
            {/* <ContactForm /> */}
            {/* <ContactInfo /> */}
          </Grid>
          <Grid item xs={12}>
            <GetInTouch />
          </Grid>
          <Grid item xs={12} mt={4}>
            <iframe
              title="ku-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.1602564910536!2d85.53645301542707!3d27.61955293595072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb092082d99e3b%3A0xe509dafa47685dba!2sKathmandu%20University!5e0!3m2!1sen!2sus!4v1644506871909!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ContactPage
