import { Container, Typography, Box, Stack, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FileOpen } from '@mui/icons-material'
import { Helmet } from 'react-helmet'
import db from '../../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const ItExpressPage = () => {
  const [data, setData] = useState(null)

  const getData = () => {
    onSnapshot(collection(db, 'itexpress'), (snapshot) => {
      const itExpressList = snapshot.docs.map((doc) => doc.data())
      itExpressList.sort((a, b) => b.year - a.year)
      setData(itExpressList)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Helmet>
        <title> IT Express - KUCC</title>
      </Helmet>
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h5" mb={2} sx={{ fontWeight: 'bold' }}>
            IT Express
          </Typography>
          <Typography variant="body1" color="text.secondary">
            IT Express is a magazine published every year by the KUCC. It includes articles
            submitted by the students of DOCSE, research works, clubs information and messages from
            reputed personnel. Listed below is the archive of the e-copies of IT Express published
            since 2018.
          </Typography>
        </Box>
        <Stack spacing={4} sx={{ marginBottom: 1 }}>
          {data && data.map((itexp) => (
            <Box key={itexp.year} sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #d4d4d4' }}>
              <Link href={itexp.url}  target="_blank">
                <FileOpen fontSize="small" sx={{ color: '#25bcea' }} />
                <Typography
                  variant="subtitle"
                  color="#25bcea"
                  sx={{ fontWeight: 'bold', marginLeft: 1 }}
                >
                  IT Express {itexp.year}
                </Typography>
              </Link>
            </Box>
          ))}
        </Stack>
        <Typography variant="caption" color="text.secondary">
          {' '}
          Note: Click on the pdf to download.
        </Typography>
      </Container>
    </>
  )
}

export default ItExpressPage
