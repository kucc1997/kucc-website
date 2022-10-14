import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid, Typography } from '@mui/material'
import COLORS from '../../config/colors'
import NewsNoticeList from '../../components/NewsNotice/NewsNoticeList'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const NewsNoticePage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Helmet>
        <title> News and Notices - KUCC</title>
      </Helmet>
      <Box style = {{height: 8}}>

      </Box>
      <Box
        sx={{ display: 'flex', backgroundColor: COLORS.light, height: { md: 44, xs: 300 }, mb: 4 }}
        style = {{height: 120}}
      >
        <Container sx = {{py: 2}}>
          <Box textAlign= "left" >
          <Typography>
                <span style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 32 }}>News and Notices</span>
              </Typography>
              <Typography>
                <span style={{  color: COLORS.dark, fontSize: 14 }}> Home &nbsp; News and Notices</span>
              </Typography>
          </Box>
        
        </Container>
        
      </Box>
      <Grid
        sx={{ background: 'text.light' }}
        container
        justify={'center'}
        spacing={0}
        rowspacing={1}
        fluid
        style={{ paddingLeft: 60, paddingRight: 0 }}
      >
        <Grid item xs={6} md={8}>
          <Container sx={{ py: 4 }}>
            <Box textAlign="center" mb={1}>
              <Typography variant="subtitle1" color="text.secondary">
                <h4 style={{ color: COLORS.primary }}>Kathmandu Univesity Computer Club</h4>
              </Typography>
              <Typography variant="h4">
                <span style={{ fontWeight: 'bold', color: COLORS.darkBlue }}>News and Notices</span>
              </Typography>
              <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
                <NewsNoticeList />
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={6} md={4}>
          <Container sx={{ py: 6 }}>
            <Box mb={3}>
              <Typography>
                <span style={{ fontWeight: 'bold', fontSize: 24 }}>Monthly Archives {'\n'}</span>
              </Typography>
              <br></br>
              <Typography>
                <span
                  style={{
                    fontSize: 14,
                    textAlign: 'left',
                    color: COLORS.dark,
                    fontWeight: 'bold',
                  }}
                >
                  Archives
                </span>
              </Typography>
              <br></br>
              <Typography>
                <div style={{ display: 'inline', float: 'center' }}>
                  <Box ml={3}>
                    <ol style={{ listStyleType: 'disc', color: COLORS.dark }}>
                      <li>
                        <span style={{ color: COLORS.primary }}>September 2022</span> (5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>August 2022</span> (5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>July 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>June 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>May 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>April 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>March 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>February 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>January 2022 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>December 2021 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>November 2021 </span>(5)
                      </li>
                      <li>
                        <span style={{ color: COLORS.primary }}>October 2021 </span>(5)
                      </li>
                    </ol>
                  </Box>
                </div>
              </Typography>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Typography>
                <span style={{ fontWeight: 'bold', fontSize: '28' }}>Calendar</span>
                <br></br>
                <div>
                  
                  <Calendar onChange={onChange} value={value} />
                </div>
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default NewsNoticePage
