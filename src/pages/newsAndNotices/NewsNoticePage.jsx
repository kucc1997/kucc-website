import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { collection, onSnapshot } from '@firebase/firestore'
import db from '../../config/firebase'
import NewsList from '../../components/NewsandNotices/NewsList'

import { Container, Box, Typography } from '@mui/material'

const NewsNoticePage = () => {
  useEffect(() => {
    onSnapshot(collection(db, 'events'), (snapshot) => {
      const newsList = snapshot.docs.map((doc) => doc.data())
      console.log('All News and Notices ', newsList)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title> News and Notices - KUCC</title>
      </Helmet>
      <Container sx={{ pb: 8, pt: 4 }}>
        <Box>
          <Typography variant="h4" mb={2}>
          News and Notices
          </Typography>
          
        </Box>
        <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
          <NewsList />
        </Box>
      </Container>
    </>
  )
}

export default NewsNoticePage
