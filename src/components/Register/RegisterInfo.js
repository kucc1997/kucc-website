import {
  Card,
  CardActions,
  CardContent,
  Box,
  Typography,
  IconButton,
  Container,
} from '@mui/material'
import { FacebookOutlined, Instagram, Twitter, GitHub } from '@mui/icons-material'
import React from 'react'

const RegisterInfo = () => {
  return (
    <Card
      sx={{ backgroundColor: '#402880', maxWidth: '500px', minHeight: 504, boxShadow: 4, p: 2.5 }}
    >
      <CardContent
        sx={{
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6.700" mb={2} color="text.light" component="h2">
          How to get a voucher number?
        </Typography>
        <Typography variant="subtitle1" color="text.light">
          – Visit Nepal Investment Bank Extension Counter at Block 14, Kathmandu University and pay
          NRs. 500 to Kathmandu University Computer Club using the below account details:
        </Typography>

        <Typography varaint="subtitle1" color="text.light" fontWeight="bold" my={1}>
          Account Name: KU-Computer Club
        </Typography>
        <Typography varaint="subtitle1" color="text.light" fontWeight="bold" my={1}>
          Account Number: 00505030016634
        </Typography>
        <Typography variant="subtitle1" color="text.light" my={2}>
          – After paying NRs. 500 at bank, bank gives you the voucher number, fill up this form
          using the received voucher number and provide the copy of voucher to one of the KUCC
          Executives for verification.
        </Typography>
        <Typography varaint="subtitle1" color="text.light" fontWeight="bold" mt={2}>
          For online payments:
        </Typography>
        <Typography variant="subtitle1" color="text.light">
          You can also do payment via bank transfer through online/mobile banking, eSewa, Khalti,
          etc. In the voucher field, enter your KU Registration number. If you do not have
          registration number yet, enter the transaction/reference number and inform KUCC board
          member along with the screenshot/pdf of the payment confirmation.
        </Typography>
      </CardContent>

      <CardActions sx={{ marginTop: 4 }}>
        <IconButton>
          <FacebookOutlined sx={{ color: 'text.light' }} />
        </IconButton>
        <IconButton>
          <Instagram sx={{ color: 'text.light' }} />
        </IconButton>
        <IconButton>
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
              left: 50,
            }}
          ></Box>
        </Container>
      </CardActions>
    </Card>
  )
}

export default RegisterInfo
