import { collection, onSnapshot } from '@firebase/firestore'
import React, { useEffect } from 'react'
import db from '../../config/firebase'
import EventItem from '../../components/Event/EventItem'
import EventFilter from '../../components/EventFilter/EventFilter'
import { Container, Box, Typography } from '@mui/material'

const EventsPage = () => {
  useEffect(() => {
    onSnapshot(collection(db, 'events'), (snapshot) => {
      const eventList = snapshot.docs.map((doc) => doc.data())
      console.log('All Events ', eventList)
    })
  }, [])

  return (
    <Container sx={{ pb: 8, pt: 4 }}>
      <Box>
        <Typography variant="h4" mb={2}>
          Events
        </Typography>
        <EventFilter />
      </Box>
      <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
        <EventItem />
      </Box>
    </Container>
  )
}

export default EventsPage
