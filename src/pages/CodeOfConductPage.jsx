import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import COLORS from '../config/colors'
import {generalCodeOfConduct, memberCodeOfConduct, memberRights, memberRequirements} from "../data/codeOfConduct"
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles({
  heading: {
    fontWeight: 'bold',
    marginBottom: 1
  },
  listItems: {
   color: COLORS.dark, 
   lineHeight: '2rem'

  }
})
const CodeOfConductPage = () => {
  const classes = useStyles();
  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={3}>
        <Typography
          variant="h4"
          mb={1}
          sx={{borderStyle: 'inset' }}
        >
          Code Of Conduct
        </Typography>
        <Typography variant="h6" >
          Kathmandu University Computer Club
        </Typography>
        <Typography variant="h6">
          Dhulikhel-4, Kavre, Nepal
        </Typography>
      </Box>
      <Box>
        <Typography color="text.primary" mb={2}>
          The Club Code of Conduct applies to all KUCC officials, volunteers, members and
          supporters.
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          THE CLUB – GENERAL CODE OF CONDUCT
        </Typography>
        <ol className={classes.listItems}>
          {generalCodeOfConduct.map((ele) => {
            return <li key={ele}>{ele}</li>
          })}
        </ol>
        <Typography variant="h6" className={classes.heading}>
          MEMBERS’ CODE OF CONDUCT
        </Typography>
        <ol className={classes.listItems}>
          {memberCodeOfConduct.map((ele) => {
            return <li key={ele}>{ele}</li>
          })}
        </ol>
        <Typography variant="h6" className={classes.heading}>
          Members have right to:
        </Typography>
        <ol className={classes.listItems}>
          {memberRights.map((ele) => {
            return <li key={ele}>{ele}</li>
          })}
        </ol>

        <Typography variant="h6" className={classes.heading}>
          Member must:
        </Typography>
        <ol className={classes.listItems}>
          {memberRequirements.map((ele) => {
            return <li key={ele}>{ele}</li>
          })}
        </ol>
        <p className={classes.listItems}>
          (Any members not behaving in accordance with the terms of the Code of Conduct will be
          investigated and appropriate course of action will be taken by the Club, which may include
          revocation of membership.)
        </p>
      </Box>
    </Container>
  )
}

export default CodeOfConductPage
