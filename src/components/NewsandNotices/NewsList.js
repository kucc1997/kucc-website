import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import NewsItem from './NewsItem'

const NewsList = () => {
  return (
    <Box>
      {Array.from(Array(10)).map((_event, index) => (
        <NewsItem key={index} />
      ))}
      {}
    </Box>
  )
}

export default NewsList
