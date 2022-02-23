import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import EventItem from './EventItem'

const EventList = () => {
  return (
    <Box>
      {Array.from(Array(10)).map((_event, index) => (
        <EventItem key={index} />
      ))}
      {/* <EventItem /> */}
    </Box>
  )
}

export default EventList
