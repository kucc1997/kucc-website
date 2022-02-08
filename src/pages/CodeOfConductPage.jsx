import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import COLORS from '../config/colors'
import {generalCodeOfConduct, memberCodeOfConduct, memberRights, memberRequirements} from "../data/codeOfConduct"

const CodeOfConductPage = () => {
  
  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={3}>
        <Typography
          variant="h4"
          color="text.primary"
          mb={1}
          sx={{borderStyle: 'inset' }}
        >
          Code Of Conduct
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Kathmandu University Computer Club
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Dhulikhel-4, Kavre, Nepal
        </Typography>
      </Box>
      <Box>
        <Typography color="text.secondary" mb={2}>
          The Club Code of Conduct applies to all KUCC officials, volunteers, members and
          supporters.
        </Typography>
        <Typography color="text.primary" variant="h6" mb={1} f>
          THE CLUB – GENERAL CODE OF CONDUCT
        </Typography>
        <ol style={{ color: COLORS.medium, lineHeight: '2rem' }}>
          {generalCodeOfConduct.map((ele) => {
            return <li>{ele}</li>
          })}
        </ol>
        <Typography color="text.primary" variant="h6" mb={1}>
          MEMBERS’ CODE OF CONDUCT
        </Typography>
        <ol style={{ color: COLORS.medium, lineHeight: '2rem' }}>
          {memberCodeOfConduct.map((ele) => {
            return <li>{ele}</li>
          })}
        </ol>
        <Typography color="text.primary" variant="h6" mb={1}>
          Members have right to:
        </Typography>
        <ol style={{ color: COLORS.medium, lineHeight: '2rem' }}>
          {memberRights.map((ele) => {
            return <li>{ele}</li>
          })}
        </ol>

        <Typography color="text.primary" variant="h6" mb={1}>
          Member must:
        </Typography>
        <ol style={{ color: COLORS.medium, lineHeight: '2rem' }}>
          {memberRequirements.map((ele) => {
            return <li>{ele}</li>
          })}
        </ol>
        <p style={{ color: COLORS.medium }}>
          (Any members not behaving in accordance with the terms of the Code of Conduct will be
          investigated and appropriate course of action will be taken by the Club, which may include
          revocation of membership.)
        </p>
      </Box>
    </Container>
  )
}

export default CodeOfConductPage
