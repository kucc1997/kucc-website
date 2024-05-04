import { Container, Typography, Box, Stack, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FileOpen } from '@mui/icons-material'
import { Helmet } from 'react-helmet'
import db from '../../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { Underline } from 'lucide-react'
import { blue } from '@mui/material/colors'

const ItExpressList = [
  // {
  //   name: 'IT Express 2023',
  //   link: '/docs/IT-EXPRESS-2023.pdf',
  // },
  {
    name: 'IT Express 2022',
    link: '/docs/IT-EXPRESS-2022.pdf',
  },
  {
    name: 'IT Express 2021',
    link: '/docs/IT-EXPRESS-2021.pdf',
  },
  {
    name: 'IT Express 2019',
    link: '/docs/IT-EXPRESS-2019.pdf',
  },
  {
    name: 'IT Express 2018',
    link: '/docs/IT-EXPRESS-2018.pdf',
  },
]

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
          {data &&
            data.map((itexp) => (
              <Box
                key={itexp.year}
                sx={{ display: 'flex', alignItems: 'center', borderBottom: '5px solid #dbeafe' }}
              >
                <Link href={itexp.url} target="_blank">
                  <FileOpen fontSize="small" sx={{ color: '#dbeafe' }} />
                  <Typography
                    variant="subtitle"
                    color="#dbeafe"
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

        <Stack spacing={3}  className="py-4">
          {ItExpressList.map((itexp) => (
            <div key={itexp.name}>
              <Link
                href={itexp.link}
                target="_blank"
                className="text-subTitleColor flex items-center gap-2 text-xl"
              >
                <FileOpen fontSize="medium" sx={{ color: '#93c5fd' }} />
                <p className="text-subTitleColor underline decoration-secondBackground ">{itexp.name}</p>
              </Link>
            </div>
          ))}
        </Stack>
      </Container>
    </>
  )
}

export default ItExpressPage
