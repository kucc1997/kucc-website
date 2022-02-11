import React, { useState } from 'react'
import { Button, Container, Grid, TextField, Stack, Box, MenuItem } from '@mui/material'
import { Send } from '@mui/icons-material'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const RegisterForm = () => {
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
    {
      fullName == '' && setNameError(true)
    }

    {
      email == '' && setEmailError(true)
    }
    {
      phone == '' && setPhoneError(true)
    }
    {
      message == '' && setMessageError(true)
    }
  }
  return (
    <Container sx={{ py: 6 }}>
      <Box
        component="form"
        noValidate
        sx={{
          mx: 'auto',
          mt: { xs: 3, md: 0 },
          mb: 3,
          p: 3,
          backgroundColor: 'background.paper',
          boxShadow: 3,
          '& .MuiFormHelperText-root': { color: 'rgba(0, 0, 0, 0.55)' },
          '& .MuiFormControl-root': {
            my: 1.5,
          },
        }}
        onSubmit={handleSubmit}
      >
        <Stack spacing={2} direction="row">
          <TextField
            onChange={(e) => setFullName(e.target.value)}
            label="First Name"
            fullWidth
            required
            error={nameError}
            size="small"
          />
          <TextField
            onChange={(e) => setFullName(e.target.value)}
            label="Last Name"
            fullWidth
            required
            error={nameError}
            size="small"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="Year"
            value={currency}
            onChange={handleChange}
            helperText="Please choose year"
            size="small"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="Semester"
            value={currency}
            onChange={handleChange}
            helperText="Please choose semester"
            size="small"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="Program"
            value={currency}
            onChange={handleChange}
            helperText="Please select enrolled program"
            size="small"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            onChange={(e) => setFullName(e.target.value)}
            label="Contact Number"
            fullWidth
            required
            type="number"
            error={nameError}
            size="small"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="User Email"
            fullWidth
            required
            error={emailError}
            size="small"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            fullWidth
            required
            error={emailError}
            size="small"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Password"
            type="password"
            fullWidth
            required
            error={emailError}
            size="small"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Confirm Password"
            type="password"
            fullWidth
            required
            error={emailError}
            size="small"
          />
        </Stack>
        <Stack>
          <TextField
            onChange={(e) => setFullName(e.target.value)}
            label="Voucher Number"
            fullWidth
            required
            error={nameError}
            size="small"
          />
        </Stack>

        {/* <Stack spacing={2}>
          <TextField
            variant="outlined"
            label="Account"
            size="small"
            value={formData.account}
            error={!isAccValid}
            helperText="Only letters, underscore and numbers, max 13 characters"
            required
            onChange={(e) => handleChange(e, 'account')}
            onFocus={handleOnFocus}
          />
          <TextField
            variant="outlined"
            label="Nickname"
            value={formData.account}
            size="small"
            helperText="Same as account"
            inputProps={{ readOnly: true }}
            required
          />
          <TextField
            id="select"
            label="User Role"
            value={formData.role}
            select
            size="small"
            SelectProps={{ multiple: false }}
            onChange={(e) => handleChange(e, 'role')}
          >
            {options?.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
            {!options && <MenuItem value="user-role">User Role</MenuItem>}
          </TextField>
          <TextField
            type="password"
            variant="outlined"
            label="Login Password"
            value={formData.password}
            size="small"
            error={!isPassValid}
            helperText="Letters, underscore & numbers"
            required
            onChange={(e) => handleChange(e, 'password')}
            onFocus={handleOnFocus}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Confirm Password"
            value={formData.confirmPassword}
            size="small"
            error={diffConfirmPass}
            helperText={
              diffConfirmPass ? 'Confirm password do not match' : 'Please re-enter the password'
            }
            required
            onChange={(e) => handleChange(e, 'confirmPassword')}
          />
          <LoadingButton
            variant="contained"
            fullWidth
            type="submit"
            loading={isLoading?.usedFor === 'newUserReg' && isLoading.status}
          >
            Save
          </LoadingButton>
        </Stack> */}
      </Box>
    </Container>
  )
}

export default RegisterForm
