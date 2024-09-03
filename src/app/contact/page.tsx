import React from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
import GetInTouch from './components/GetInTouch'

export const metadata = {
  title: 'Contact - Kathmandu University Computer Club (KUCC)',
  description: 'Get In Touch With Kathmandu University Computer Club',
}

const ContactPage = () => {
  return (
    <>
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
        </Box>
        <Grid sx={{ background: 'text.light' }} container rowSpacing={4} columnSpacing={{ xs: 1 }}>
          <Grid item xs={12} sm={6} md={4}></Grid>
          <Grid item xs={12} sm={6} lg={8}></Grid>
          <Grid item xs={12}>
            <GetInTouch />
          </Grid>
          <Grid item xs={12} mt={4}>
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ku-location&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ContactPage
