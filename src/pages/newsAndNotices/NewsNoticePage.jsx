import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid, Typography } from '@mui/material'
import COLORS from '../../config/colors'
import NewsNoticeList from '../../components/NewsNotice/NewsNoticeList'
const NewsNoticePage = () => {
  return (
    <>
      <Helmet>
        <title> News and Notices - KUCC</title>
      </Helmet>
      
      <Grid sx={{ background: 'text.light' }} container justify = {"center"} spacing = {0} rowspacing = {1} fluid style={{ paddingLeft: 360, paddingRight: 0 }}>
        <Grid item xs={6} md={6}>
          <Container sx={{ py: 4 }}>
            <Box textAlign="center" mb={1}>
              <Typography variant="subtitle1" color="text.secondary">
                <h4 style={{ color: COLORS.primary }}>Kathmandu Univesity Computer Club</h4>
              </Typography>
              <Typography variant="h4">
                <span style={{ fontWeight: 'bold' }}>News and Notices</span>
              </Typography>
              <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
                <NewsNoticeList />
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={6} md={4}>
          <Container sx={{ py: 6 }}>
            <Box textAlign="center" mb={3}>
              <Typography>
                <span style={{ fontWeight: 'bold', fontSize: '34' }}>Monthly Archives {'\n'}</span>
              </Typography>
              <br></br>
              <Typography>
                <span style={{ fontSize: '4', textAlign: 'right' }}>Archives<br/></span>
              </Typography>
              <br></br>
              <Typography><div style={{ display: 'inline', float: 'center' }}>
              <ol style={{ listStyleType: 'none', color:COLORS.primary }}>
                <li>September 2022 (5)</li>
                <li>August 2022 (5)</li>
                <li>July 2022 (5)</li>
                <li>June 2022 (5)</li>
                <li>May 2022 (5)</li>
                <li>April 2022 (5)</li>
                <li>March 2022 (5)</li>
                <li>February 2022 (5)</li>
                <li>January 2022 (5)</li>
                <li>December 2021 (5)</li>
                <li>November 2021 (5)</li>
                <li>October 2021 (5)</li>
              </ol>
              </div></Typography>
              <br></br><br></br><br></br><br></br>
              <Typography>
                <span style={{ fontWeight: 'bold', fontSize: '28' }}>Calendar</span>
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default NewsNoticePage
