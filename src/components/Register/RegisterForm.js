import * as React from 'react'
import { Button, TextField, Stack, Box, MenuItem, Typography } from '@mui/material'
import { Send } from '@mui/icons-material'

const years = [
  {
    value: 'first',
    label: 'First',
  },
  {
    value: 'second',
    label: 'Second',
  },
  {
    value: 'third',
    label: 'Third',
  },
  {
    value: 'fourth',
    label: 'Fourth',
  },
]

const semesters = [
  {
    value: 'firstSem',
    label: 'First',
  },
  {
    value: 'secondSem',
    label: 'Second',
  },
]

const programs = [
  {
    value: 'CE',
    label: 'Computer Engineering',
  },
  {
    value: 'CS',
    label: 'Computer Science',
  },
  {
    value: 'AI',
    label: 'BTech in AI',
  },
]

const forWhichKey = {
  ACADEMIC: 'academic',
  CONTACT: 'contact',
}

const fieldKeys = {
  YEAR: 'year',
  SEMESTER: 'semester',
  PROGRAM: 'program',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  CONTACT_NUMBER: 'contactNumber',
}

const RegisterForm = () => {
  const [academicDetails, setAcademicDetails] = React.useState({
    year: '',
    semester: '',
    program: '',
  })

  const [contactDetails, setContactDetails] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  })

  let initialState = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    contactNumber: false,
    voucherDetail: false,
    year: false,
    semester: false,
    program: false,
    file: false,
  }
  const [errorSt, setError] = React.useState(initialState)

  const [voucherDetail, setVoucherDetail] = React.useState('')

  const handleChange = (event, forWhich, key) => {
    if (forWhich === forWhichKey.ACADEMIC) {
      setAcademicDetails({ ...academicDetails, [key]: event.target.value })
    }

    if (forWhich === forWhichKey.CONTACT) {
      setContactDetails({ ...contactDetails, [key]: event.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let isError = false
    let temp = { ...errorSt }
    for (let key in contactDetails) {
      if (contactDetails[key] === '') {
        isError = true
        temp[key] = true
      }
    }
    for (let key in academicDetails) {
      if (academicDetails[key] === '') {
        isError = true
        temp[key] = true
      }
    }
    if (voucherDetail === '') {
      isError = true
      temp['voucherDetail'] = true
    }
    setError(temp)
    if (isError) {
      console.log(errorSt)
      return alert('Please fill the form Properly')
    }
    console.log('Form submitted!')
    // console.log({ ...academicDetails, ...contactDetails, voucher: voucherDetail })
  }

  return (
    <Box
      component="form"
      noValidate
      sx={{
        mx: 'auto',
        mt: { xs: 3, md: 0 },
        p: 4,
        backgroundColor: 'background.paper',
        boxShadow: 3,
        '& .MuiFormHelperText-root': { color: 'rgba(0, 0, 0, 0.55)' },
        '& .MuiFormControl-root': {
          my: 3,
        },
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h1" fontSize="32px" fontWeight="bold" mb={2}>
        KUCC Member Registration
      </Typography>
      <Stack spacing={3} direction="row">
        <TextField
          onChange={(e) => handleChange(e, forWhichKey.CONTACT, fieldKeys.FIRST_NAME)}
          value={contactDetails.firstName}
          label="First Name"
          fullWidth
          required
          size="small"
          error={errorSt.firstName}
        />

        <TextField
          onChange={(e) => handleChange(e, forWhichKey.CONTACT, fieldKeys.LAST_NAME)}
          label="Last Name"
          value={contactDetails.lastName}
          fullWidth
          required
          error={errorSt.lastName}
          size="small"
        />
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField
          select
          fullWidth
          label="Year"
          // value={academicDetails.year}
          onChange={(e) => handleChange(e, forWhichKey.ACADEMIC, fieldKeys.YEAR)}
          helperText="Please choose year"
          size="small"
          error={errorSt.year}
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          label="Semester"
          // value={academicDetails.semester}
          onChange={(e) => handleChange(e, forWhichKey.ACADEMIC, fieldKeys.SEMESTER)}
          helperText="Please choose semester"
          size="small"
          error={errorSt.semester}
        >
          {semesters.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField
          select
          fullWidth
          label="Program"
          // value={academicDetails.program}
          onChange={(e) => handleChange(e, forWhichKey.ACADEMIC, fieldKeys.PROGRAM)}
          helperText="Please select enrolled program"
          size="small"
          error={errorSt.program}
        >
          {programs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          onChange={(e) => handleChange(e, forWhichKey.CONTACT, fieldKeys.CONTACT_NUMBER)}
          label="Contact Number"
          value={contactDetails.contactNumber}
          inputProps={{
            maxLength: 10,
          }}
          fullWidth
          required
          type="number"
          size="small"
          error={errorSt.contactNumber}
        />
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField
          onChange={(e) => handleChange(e, forWhichKey.CONTACT, fieldKeys.EMAIL)}
          value={contactDetails.email}
          label="User Email"
          fullWidth
          required
          error={errorSt.email}
          size="small"
        />
        <TextField
          value={contactDetails.email}
          label="Email"
          fullWidth
          required
          size="small"
          error={errorSt.email}
        />
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField
          onChange={(e) => handleChange(e, forWhichKey.CONTACT, fieldKeys.PASSWORD)}
          value={contactDetails.password}
          label="Password"
          type="password"
          fullWidth
          required
          size="small"
          error={errorSt.password}
        />
        <TextField
          onChange={(e) => handleChange(e, forWhichKey.CONTACT, fieldKeys.CONFIRM_PASSWORD)}
          value={contactDetails.confirmPassword}
          label="Confirm Password"
          type="password"
          fullWidth
          required
          size="small"
          error={errorSt.confirmPassword}
        />
      </Stack>
      <Stack spacing={3} direction="row">
        <TextField
          onChange={(e) => setVoucherDetail(e.target.value)}
          value={voucherDetail}
          label="Voucher Number"
          fullWidth
          required
          size="small"
          error={errorSt.voucherDetail}
        />

        <TextField
          type="file"
          fullWidth
          size="small"
          error={errorSt.file}
          helperText="Upload pdf or image. Max allowed size - 1 Mb"
        />
      </Stack>

      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button type="submit" variant="contained" color="btn" size="large" endIcon={<Send />}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default RegisterForm
