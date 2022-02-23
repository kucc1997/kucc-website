import { Container, Typography, Box, Stack, Link } from '@mui/material'
import React from 'react'
import { ArrowRight } from '@mui/icons-material'
import IT2018 from '../../data/itexpress/IT-EXPRESS-2018.pdf'
import { Helmet } from 'react-helmet'

const ItExpressPage = () => {
  const itExpresses = [
    {
      year: 2021,
      url: IT2018,
    },
    {
      year: 2020,
      url: IT2018,
    },
    {
      year: 2019,
      url: IT2018,
    },
    {
      year: 2018,
      url: IT2018,
    },
  ]

  const handleClick = (e) => {
    console.log('clicked', e.target)
  }

  return (
    <>
      <Helmet>
        <title> IT Express - KUCC</title>
      </Helmet>
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h5" mb={2} sx={{ fontWeight: 'bold' }}>
            IT Express{' '}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            IT Express is a magazine published every year by the KUCC. It includes articles
            submitted by the students of DOCSE, research works, clubs information and messages from
            reputed personnel. Listed below is the archive of the e-copies of IT Express published
            since 2018.
          </Typography>
        </Box>
        <Stack spacing={4} sx={{ marginBottom: 1 }}>
          {itExpresses.map((itexp) => (
            <Link href={itexp.url} key={itexp.year} target="_blank" onClick={handleClick}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #d4d4d4' }}
              >
                <ArrowRight fontSize="large" sx={{ color: '#25bcea' }} />
                <Typography variant="subtitle" color="#25bcea" sx={{ fontWeight: 'bold' }}>
                  IT Express {itexp.year}
                </Typography>
              </Box>
            </Link>
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
