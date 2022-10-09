import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function NewsItem() {
  return (
    <Card
      sx={{ display: 'flex', width: { md: 600, xs: 500 }, height: { md: 200, xs: 300 }, mb: 4 }}
    >
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image="/assets/images/cards/event-placeholder.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" fontWeight="bold">
            Register for Hacktober
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            fontWeight="bold"
            sx={{ display: 'flex', alignItems: 'flex-start', my: 1 }}
          >
            <InsertInvitationIcon sx={{ mr: 1 }} />
            Published on Feb 21, 2021 
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            fontWeight="bold"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <LocationOnIcon sx={{ mr: 1 }} />
            Kathmandu University
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: { md: '150px', xs: 3 },
            py: 2,
            justifyContent: { md: 'flex-end' },
          }}
        >
          <Button type="submit" variant="contained" color="btn" endIcon={<ArrowForwardIosIcon />}>
            Read more
          </Button>
        </Box>
      </Box>
    </Card>
  )
}
