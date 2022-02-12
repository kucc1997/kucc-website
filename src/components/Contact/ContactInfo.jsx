import React from 'react'
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

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  lightCol: {
    color: 'white',
  },
  formText: {
    color: 'white',
    marginLeft: 20,
  },
})

const ContactInfo = () => {
  const classes = useStyles()
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
          <LocalPhone className={classes.lightCol} />
          <Typography variant="subtitle2" className={classes.formText}>
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
          <Email className={classes.lightCol} />
          <Typography variant="subtitle2" className={classes.formText}>
            kucc@ku.edu.np
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <LocationOn className={classes.lightCol} />
          <Typography variant="subtitle2" className={classes.formText}>
            Dhulikhel-4, Kavrepalanchok
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ marginTop: 4 }}>
        <IconButton>
          <FacebookOutlined className={classes.lightCol} />
        </IconButton>
        <IconButton>
          <Instagram className={classes.lightCol} />
        </IconButton>
        <IconButton>
          <Twitter className={classes.lightCol} />
        </IconButton>
        <IconButton>
          <GitHub className={classes.lightCol} />
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
              left: 50,
            }}
          ></Box>
        </Container>
      </CardActions>
    </Card>
  )
}

export default ContactInfo
