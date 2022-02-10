import {
  Card,
  CardActions,
  CardContent,
  Box,
  Typography,
  IconButton,
  Container,
} from '@mui/material'
import {
  LocalPhone,
  Email,
  LocationOn,
  FacebookOutlined,
  Instagram,
  Twitter,
  GitHub,
} from '@mui/icons-material'
import React from 'react'

const ContactInfo = () => {
  return (
    <Card sx={{ backgroundColor: '#402880', maxWidth: '500px', boxShadow: 4, padding: 2 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
        }}
      >
        <Typography variant="h6.700" mb={2} color="text.light" component="h2">
          Contact Information
        </Typography>
        <Typography variant="subtitle1" color="text.light" sx={{ textAlign: 'center' }}>
          Fill up the form and our team will get back to you within a day.
        </Typography>
      </Box>
      <CardContent
        sx={{
          marginBottom: 2,
          marginTop: -2,
        }}
      >
        <Box
          pb={4}
          sx={{
            display: 'flex',
          }}
        >
          <LocalPhone sx={{ color: 'text.light' }} />
          <Typography variant="subtitle2" color="text.light" ml={4}>
            {' '}
            +980-0000000
          </Typography>
        </Box>
        <Box
          pb={6}
          sx={{
            display: 'flex',
          }}
        >
          <Email sx={{ color: 'text.light' }} />
          <Typography variant="subtitle2" color="text.light" ml={4}>
            kucc@ku.edu.np
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <LocationOn sx={{ color: 'text.light' }} />
          <Typography variant="subtitle2" color="text.light" ml={4}>
            {' '}
            Dhulikhel-4, Kavrepalanchok
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ marginTop: 4 }}>
        <IconButton>
          <FacebookOutlined sx={{ color: 'text.light' }} />
        </IconButton>
        <IconButton>
          <Instagram sx={{ color: 'text.light' }} />
        </IconButton>
        <IconButton >
          <Twitter sx={{ color: 'text.light' }} />
        </IconButton>
        <IconButton>
          <GitHub sx={{ color: 'text.light' }} />
        </IconButton>
        <Container
          sx={{
            position: 'relative',
          }}
        >
     
          <Box
            sx={{
              width: 300,
              height: 300,
              background: 'pink',
              borderRadius: '50%',
              position: 'absolute',
              top: -70,
              left: 50
            }}
          ></Box>
        </Container>
      </CardActions>
    </Card>
  )
}

export default ContactInfo
