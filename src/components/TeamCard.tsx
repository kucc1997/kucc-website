import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
// import GitHubIcon from '@mui/icons-material/GitHub'
// import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import tailwindConfig from '../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const TeamCard = ({
  name,
  position,
  linkedin,
  image,
  mail,
}: {
  name: string
  position: string
  linkedin: string
  image: string
  mail: string
}) => {
  const fullConfig = resolveConfig(tailwindConfig)
  // @ts-ignore
  const baseBackground = fullConfig?.theme?.colors?.baseBackground

  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: baseBackground,
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
          className="rounded-full aspect-square object-cover"
          height="176"
          image={image}
          alt={name}
        />
      </Box>
      <CardContent sx={{ pt: '80px' }}>
        <Typography sx={{ fontSize: '18px' }} color="text.primary" align="center">
          {name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" align="center" fontWeight="600">
          {position.toUpperCase()}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }} disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </IconButton>
        {/* <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton> */}
        <IconButton aria-label="share">
          <a href={`mailto:${mail}`} target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TeamCard
