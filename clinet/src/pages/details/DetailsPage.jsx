import { Box } from '@mui/material'
import React from 'react'

const DetailsPage = () => {
  return (
    <>
    <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'86vh'}}
>
  <Box className='cool'>
<img
    src={'/assets/warg.png'}
    alt={`digimon`}
    style={{ height: "500px", width:'350px'}}
  />    
  </Box>
  <Box className='cool'>
  <img
    src={'/assets/digivice.png'}
    alt={`digimon`}
    style={{ height: "150px", width:'150px'}}
  />   
  </Box>
  <Box className='cool'>

  <img
    src={'/assets/tai.png'}
    alt={`digimon`}
    style={{ height: "500px", width:'400px'}}
  />   
  </Box>
    </Box>
    </>
  )
}

export default DetailsPage