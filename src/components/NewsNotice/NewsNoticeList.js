import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import NewsNoticeItem from './NewsNoticeItem'

const NewsNoticeList = () => {
    return (
        <Box>
            {
                Array.from(Array(10)).map((_event, index) => (
                    <NewsNoticeItem key = {index}/>
                ))
            }
        </Box>
    )
}

export default NewsNoticeList
