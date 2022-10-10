import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import COLORS from "../../config/colors";
import { color } from '@mui/system'


export default function NewsNoticeItem() {
    return (
      <Card
        sx={{ display: 'flex', width: { md: 700, xs: 600 }, height: { md: 136, xs: 300 }, mb: 4 }}
      >
        <Card
            sx={{ display: 'flex', width: { md: 112, xs: 500 }, height: { md: 136, xs: 300 }, mb: 4 }}
        >
        <Box alignItems="center" jusifyContent = "center">
            <Typography component = "div" >
                <span style={{ fontSize: 70, color: COLORS.medium, fontWeight: "bold"}}>02</span>
                
            </Typography>
            <Typography component = "div" >
                <span style={{ fontSize: 16, color: COLORS.medium }}>Nov, 2020</span>
                
            </Typography>
        </Box>
        </Card>
        
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" fontSize = "22" fontWeight="bold">
              KUCC Demonstrated LTSP At Seventh National Science Day
            </Typography>
            <Typography
              color="text.secondary"
              component="div"
              fontSize = "12"
              sx={{ display: 'flex', alignItems: 'flex-start', my: 1 }}
            >
              Kathmandu University Computer Club demonstrated Linux Terminal Server Project at Seventh National S.
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              fontWeight="bold"
              sx={{ display: 'right', alignItems: 'center' }}
            >
             <span style={{ color: COLORS.primary }}>Read more</span> 
              
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: { md: '150px', xs: 3 },
              py: 2,
              justifyContent: { md: 'flex-end' },
            }}
          >
            <Button type="submit" variant="contained" color="btn" endIcon={<ArrowForwardIosIcon />}>
              Explore Event
            </Button>
          </Box>
        </Box>
      </Card>
    )
  }
  