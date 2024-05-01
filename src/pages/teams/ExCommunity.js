import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from '../../components/TeamCard/TeamCard'
import { Helmet } from 'react-helmet'

/**
 * @type {Array<{name: string, position: string, image: string, linkedin: string, mail: string}>}
 */
const executivesList = [
  {
    name: 'Nirjal Bhurtel',
    position: 'President',
    image: '/people/Nirjal_Bhurtel.webp',
    linkedin: 'https://www.linkedin.com/in/nirjal-bhurtel-163510149/',
    mail: 'sunnynirjal@gmail.com',
  },
  {
    name: 'Abhiyan Dhakal',
    position: 'Vice President',
    image: '/people/Abhiyan_Dhakal.webp',
    linkedin: 'https://www.linkedin.com/in/abhiyan-dhakal-9b0b01223/',
    mail: 'itsabhiyandhakal@gmail.com',
  },
  {
    name: 'Jenisha Khulal Magar',
    position: 'General Secretary',
    image: '/people/Jenisha_Khulal_Magar.webp',
    linkedin: 'https://www.linkedin.com/in/jenisha-khulal-a70268274/',
    mail: 'jenishakhulal@gmail.com',
  },
  {
    name: 'Sadikshya Pokharel',
    position: 'Treasurer',
    image: '/people/Sadikshya_Pokharel.webp',
    linkedin: 'https://www.linkedin.com/in/sadikshya-pokharel-637680298/',
    mail: 'psaishya@gmail.com',
  },
  {
    name: 'Darshan Lamichhane',
    position: 'Club Secretary',
    image: '/people/Darshan_Lamichhane.webp',
    linkedin: 'https://www.linkedin.com/in/darshan-lamichhane-2a4bb0205/',
    mail: 'darshanlamichhane012@gmail.com',
  },
  {
    name: 'Sugat Sujakhu',
    position: 'KUOSC Coordinator',
    image: '/people/Sugat_Sujakhu.webp',
    linkedin: 'https://www.linkedin.com/in/notsugat/',
    mail: 'sugatsujakhu@gmail.com',
  },
  {
    name: 'Santosh Yadav',
    position: 'Executive Member',
    image: '/people/Santosh_Yadav.webp',
    linkedin: 'https://www.linkedin.com/in/santosh-yadav-903a62250/',
    mail: 'ymanoutube@gmail.com',
  },
  {
    name: 'Shashinoor Ghimire',
    position: 'Executive Member',
    image: '/people/Shashinoor_Ghimire.webp',
    linkedin: 'https://www.linkedin.com/in/shashinoor/',
    mail: 'mail@shashinoor.com.np',
  },
  {
    name: 'Phiroj Kumar Shah',
    position: 'Executive Member',
    image: '/people/Phiroj_Kumar_Shah.webp',
    linkedin: 'https://www.linkedin.com/in/phiroj-shah-226563233/',
    mail: 'phirojshah20@gmail.com',
  },
  {
    name: 'Aagaman Bhandari',
    position: 'Executive Member',
    image: '/people/Aagaman_Bhandari.webp',
    linkedin: 'https://www.linkedin.com/in/aagaman-bhandari-074b30261/',
    mail: 'aagamanbhandari123@gmail.com',
  },
  {
    name: 'Diwas Parajuli',
    position: 'Executive Member',
    image: '/people/Diwas_Parajuli.webp',
    linkedin: 'https://www.linkedin.com/in/diwas-p-a53981227/',
    mail: 'parajuli.diwas101@gmail.com',
  },
  {
    name: 'Sanjay Pahari',
    position: 'Executive Member',
    image: '/people/Sanjay_Pahari.webp',
    linkedin: 'https://www.linkedin.com/in/sanjaypahari/',
    mail: 'paharisanjay10@gmail.com',
  },
  {
    name: 'James Bhattarai',
    position: 'Executive Member',
    image: '/people/James_Bhattarai.webp',
    linkedin: 'https://www.linkedin.com/in/jamesbhattarai/',
    mail: 'jamesbhattarai14@gmail.com',
  },
  {
    name: 'Royas Shakya',
    position: 'Executive Member',
    image: '/people/Royas_Shakya.webp',
    linkedin: 'https://www.linkedin.com/in/royas-shakya/',
    mail: 'shkroyas@gmail.com',
  },
  {
    name: 'Ranjita Dhakal',
    position: 'Executive Member',
    image: '/people/Ranjita_Dhakal.webp',
    linkedin: 'https://www.linkedin.com/in/ranjita-dhakal-rd44/',
    mail: 'dhranjita044@gmail.com',
  },
]

const ExCommunity = () => {
  return (
    <>
      <Helmet>
        <title> Executive Committee - KUCC</title>
      </Helmet>
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="subtitle1" color="text.secondary">
            KUCC Board 2024-25
          </Typography>
          <Typography variant="h4">Executive Committee</Typography>
        </Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {executivesList.map((executive) => (
            <Grid item md={4} sm={6} xs={12}>
              <TeamCard {...executive} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ExCommunity
