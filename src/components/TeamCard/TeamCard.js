import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

const TeamCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: 'grey.100',
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.default',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 4,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            borderRadius: '50%',
            width: '176px',
            mb: '-64px',
          }}
          height="176"
          image="/assets/images/board_21-21/Sajan_Mahat.jpg"
          alt="Paella dish"
        />
      </Box>
      <CardContent sx={{ pt: '80px' }}>
        <Typography sx={{ fontSize: '18px' }} color="text.primary" align="center">
          Sajan Mahat
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" align="center" fontWeight="600">
          {'KUOSC Coordinator'.toUpperCase()}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }} disableSpacing>
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TeamCard
