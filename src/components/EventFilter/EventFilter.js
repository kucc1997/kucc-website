import React from 'react'
import { ChangeEvent, Fragment, useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Stack,
  Divider,
  Switch,
} from '@mui/material'
// import { getTransactionsByDate, getReportsByDate } from 'stores/transaction/transaction-actions'
import {
  thisWeekSunday,
  thisWeekSaturday,
  today,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from '../../utils/dateHandler'

const label = { inputProps: { 'aria-label': 'Toggle Switch  ' } }

const FilterBar = () => {
  const [searchKey, setSearchKey] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleToggleSwitch = (e) => {
    console.log('Current Value of the Switch', e.target.checked)
  }

  const searchByDate = (startDate, endDate) => {
    // dispatch(getTransactionsByDate(searchKey, startDate, endDate))
  }

  return (
    <Card sx={{ bgcolor: 'grey.100', boxShadow: 0 }}>
      <CardContent
        sx={{
          display: { md: 'flex' },
          flexDirection: { md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ mb: { xs: 2, md: 0 } }}>
          <Stack direction={{ md: 'row', xs: 'column' }}>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              onChange={(e) => setStartDate(e.currentTarget.value)}
            />
            <Divider orientation="vertical" flexItem>
              to
            </Divider>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              onChange={(e) => setEndDate(e.currentTarget.value)}
            />
            <Button
              variant="contained"
              color="btn"
              onClick={() => searchByDate(startDate, endDate)}
              sx={{ mx: { md: 2 }, my: { md: 0, xs: 2 } }}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="btn" onClick={() => searchByDate(today, today)}>
              Daily
            </Button>
            <Button
              variant="contained"
              color="btn"
              onClick={() => searchByDate(thisWeekSunday, thisWeekSaturday)}
            >
              Weekly
            </Button>
            <Button variant="contained" color="btn">
              Monthly
            </Button>
            <Button variant="contained" color="btn">
              Yearly
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FilterBar
